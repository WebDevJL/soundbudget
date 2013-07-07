
$(document).ready(function () {
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
        self.loadMiddlePanel = function () {
            //console.log(this);
            if(this === undefined) 
                return "default";
            if(this.template !== undefined){
                console.log(this.template);
                switch (this.template){
                    case "accounts":
                        // Now - wire up a click event handler that asynchronously fetches a static html file and appends it to an element
                        infuser.get("accounts", function(template){
                            var tgt = $("#mp1");
                            tgt.hide().children().remove();
                            tgt.append($(template)).fadeIn();
                            ko.applyBindings(self);
                        });
                        break;
                    default:
                        break;
                }
            }else{
                return "default";
            }

    //        return "default";
        };
    });

    my.app = new appVM();
    ko.applyBindings(my.app);
    my.app.load();
});