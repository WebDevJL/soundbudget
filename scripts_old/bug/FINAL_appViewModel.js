
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/******************************************************************************/
my.Currency = function (item) {
    this.currencyID = item.currencyID;
    this.currencyName = item.currencyName;
};

my.Account = function (item) {
    this.currencyID = item.currencyID;
    this.currencyName = item.currencyName;
    this.accountID = item.accountID;
    this.accountName = item.accountName;
    this.accountBalance = item.accountBalance;
    this.active = item.active;
};
my.app = (function (my) {
    "use strict";
    var leftPanel = {
        overviewHeader: "Overview",
        schedules: {
            "header": "Schedules",
            "list": [{
                "linkUrl": "/mp/Schedules/lp_3.1",
                "linkText": "Normal"
            }, {
                "linkUrl": "/mp/Schedules/lp_3.2",
                "linkText": "Budgets"
            }]
        },
        budgets: {
            "header": "Budgets",
            "list": [{
                "linkUrl": "/mp/Budgets/lp_4.1",
                "linkText": "Recurring"
            }, {
                "linkUrl": "/mp/Budgets/lp_4.2",
                "linkText": "One-time"
            }]
        },
        preferences: {
            "header": "Preferences",
            "list": [{
                "linkUrl": "/mp/Prefs/lp_6.1",
                "linkText": "Accounts"
            }, {
                "linkUrl": "/mp/Prefs/lp_6.2",
                "linkText": "Currencies"
            }, {
                "linkUrl": "/mp/Prefs/lp_6.3",
                "linkText": "Categories"
            }, {
                "linkUrl": "/mp/Prefs/lp_6.4",
                "linkText": "SubCategories"
            }, {
                "linkUrl": "/mp/Prefs/lp_6.5",
                "linkText": "Payees"
            }]
        }
    },
        middlePanel = {
            mainHeader: "Select something in the menu",
            subHeader1: "",
            subHeader2: "",
            toolsBar: {},
            moreLink: {
                moreText: "",
                moreLinkUrl: ""
            }
        },
        rightPanel = {

        };
    return {
        leftPanel: leftPanel,
        middlePanel: middlePanel,
        rightPanel: rightPanel,
    };
})(my);

infuser.defaults.templateSuffix = ".tmpl.html";
infuser.defaults.templateUrl = "/SoundBudget/templates_JS";
// Could create a utility function to do this
/*my.objectInArray = function (searchFor, property) {
        var retVal = false;
        $.each(this, function (index, item) {
            if (item.hasOwnProperty(property)) {
                if (item[property]() === searchFor) {
                    retVal = item[property];
                    return retVal;
                }
            }
        });
        return retVal;
    };
    Array.prototype.objectInArray = my.objectInArray;*/

var appVM = (function () {
    /***********************************************************/
    var self = this;
    // LeftPanel
    self.overviewHeader = my.app.leftPanel.overviewHeader;
    self.schedules = my.app.leftPanel.schedules;
    self.budgets = my.app.leftPanel.budgets;
    self.preferences = my.app.leftPanel.preferences;
    self.loading = ko.observableArray();
    self.dynamicCurrencies = ko.observableArray();
    self.selectedCurrency = ko.observable("");
    self.dynamicAccounts = ko.observableArray();
    self.load = function () {
        var parallelExecutions = [self.loadCurrencies, self.loadAccounts];
        var delayedFilteredAccounts = 
                _.after(parallelExecutions.length, self.filteredAccounts);
        _.each(parallelExecutions, function (func) {
            func({
                success: delayedFilteredAccounts
            });
        });
    };
    self.loadCurrencies = function (ctx) {
        self.loading.push(true);
        $.getJSON('lp/Get_json/init_2',
            function (data) {
                $.each(data, function (i, p) {
                    self.dynamicCurrencies.push(new my.Currency(p));
                });
                // Let loading indicator know that this task has been completed
                self.loading.pop();
                // Try to call success callback, which is loadUser if and only 
                // if all parallel processes have completed
                if (ctx && ctx.success !== 'undefined') {
                    ctx.success();
                }
            }
        );
    };
    self.loadAccounts = function (ctx) {
        self.loading.push(true);
        $.getJSON('lp/Get_json/init_1',
            function (data) {
                $.each(data, function (i, p) {
                    self.dynamicAccounts.push(new my.Account(p));
                });
                // Let loading indicator know that this task has been completed
                self.loading.pop();
                // Try to call success callback, which is loadUser if and only 
                // if all parallel processes have completed
                if (ctx && ctx.success !== 'undefined') {
                    ctx.success();
                }
            }
        );
    };
    self.filteredAccounts = ko.computed(function () {
        if (!self.selectedCurrency()) {
            return null;
        }
        var filter = self.selectedCurrency().currencyID;
        return ko.utils.arrayFilter(self.dynamicAccounts(), function (item) {
            var itemkey = item.currencyID;
            return ko.utils.stringStartsWith(itemkey, filter);
        });
    });
    // Middle Panel
    self.mainHeader = my.app.middlePanel.mainHeader;
    self.subHeader1 = my.app.middlePanel.subHeader1;
    self.subHeader2 = my.app.middlePanel.subHeader2;
    self.toolsBar = my.app.middlePanel.toolsBar;
    self.mpData = {};
    self.moreLink = my.app.middlePanel.moreLink;;
    self.middlePanelView = function () {
        return "default";
    };
});
$(document).ready(function () {

    my.app = new appVM();
    ko.applyBindings(my.app);
    my.app.load();
});