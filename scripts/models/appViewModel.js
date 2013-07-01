
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
    this.currencyID = ko.observable(item.currencyID);
    this.currencyName = ko.observable(item.currencyName);
    this.accountID = ko.observable(item.accountID);
    this.accountName = ko.observable(item.accountName);
    this.accountBalance = ko.observable(item.accountBalance);
    this.active = ko.observable(item.active);
    this.accountURL = "/mp/Accounts/lp_2&accountID="+item.accountID; 
};
my.data = (function (my) {
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
                "template": "accounts",
                "linkUrl": "/mp/Prefs/lp_6.1",
                "linkText": "Accounts"
            }, {
                "template": "currencies",
                "linkUrl": "/mp/Prefs/lp_6.2",
                "linkText": "Currencies"
            }, {
                "template": "categories",
                "linkUrl": "/mp/Prefs/lp_6.3",
                "linkText": "Categories"
            }, {
                "template": "subcategories",
                "linkUrl": "/mp/Prefs/lp_6.4",
                "linkText": "SubCategories"
            }, {
                "template": "payees",
                "linkUrl": "/mp/Prefs/lp_6.5",
                "linkText": "Payees"
            }]
        }
    },
        middlePanel = {
            mainHeader: "Section Header ›",
            subHeader1: "Sub Section 1 ›",
            subHeader2: "Sub Section 2",
            toolsBar: {list: [
                    {
                        "filterText": "Sort",
                        "filterUrl": ""
                    },{
                        "filterText": "Add",
                        "filterUrl": ""
                    },{
                        "filterText": "Search",
                        "filterUrl": ""
                    }
            ]},
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
    "use strict";
    var self = this;
    // LeftPanel
    self.overviewHeader = my.data.leftPanel.overviewHeader;
    self.schedules = my.data.leftPanel.schedules;
    self.budgets = my.data.leftPanel.budgets;
    self.preferences = my.data.leftPanel.preferences;
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
            var itemkey = item.currencyID();
            return ko.utils.stringStartsWith(itemkey, filter);
        });
    });
    // Middle Panel
    self.mainHeader = my.data.middlePanel.mainHeader;
    self.subHeader1 = my.data.middlePanel.subHeader1;
    self.subHeader2 = my.data.middlePanel.subHeader2;
    self.toolsBar = my.data.middlePanel.toolsBar;
    self.mpData = {};
    self.moreLink = my.data.middlePanel.moreLink;
    self.selectPreferenceLink = ko.observable();
    self.middlePanelView = function () {
        //console.log(this);
        if(this === undefined) 
            return "default";
        if(this.template !== undefined){
            console.log(this.template);
            return this.template;
        }else{
            return "default";
        }
        
//        return "default";
    };
});
$(document).ready(function () {

    my.app = new appVM();
    ko.applyBindings(my.app);
    my.app.load();
});