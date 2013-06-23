/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/******************************************************************************/
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
    
    my.Currency = function () {
        this.currencyID = ko.observable();
        this.currencyName = ko.observable();
    };
    
    my.Account = function () {
        this.currencyID = ko.observable();
        this.currencyName = ko.observable();
        this.accountID = ko.observable();
        this.accountName = ko.observable();
        this.accountBalance = ko.observable();
        this.active = ko.observable();
    };

    my.appVM = (function() {
        /***********************************************************/
        var 
        // LeftPanel
            overviewHeader = my.app.leftPanel.overviewHeader,
            currencies = ko.observableArray([]),
            //currencies = my.app.leftPanel.currencies,//ko.observableArray([]),
            selectedCurrency = ko.observable(""),
            accounts = ko.computed(function(){
                if(!selectedCurrency()){
                    return null;
                }
                var filter = selectedCurrency().currencyID;
                return ko.utils.arrayFilter(my.app.leftPanel.accounts.list, function (item) {
                    var itemkey = item.currencyID;
                    return ko.utils.stringStartsWith(itemkey, filter);
                    //return itemkey.substring(0, filter.length) === filter;
                });
            }),
            schedules = my.app.leftPanel.schedules,
            budgets = my.app.leftPanel.budgets,
            preferences = my.app.leftPanel.preferences,
            //load the observable array overview_links with sample data
            dynamicCurrencies = ko.observableArray([]),
            dynamicAccounts = ko.observableArray([]),
            /*loadCurrenciesCallback = function(json){
                alert("loadCurrenciesCallback1");
                dynamicCurrencies = $.map(json, function(c){
                    return  new my.Currency()
                        .currencyID(c.currencyID)
                        .currencyName(c.currencyName);
                    //return c;
                });
                alert("loadCurrenciesCallback2");
                /*$.each(json, function (i, p) {
                    dynamicCurrencies.push(new my.Currency()
                        .currencyID(p.currencyID)
                        .currencyName(p.currencyName)
                    );
                });*/
            //},
            loadCurrencies = function () {
                //my.leftPanelDataService.getCurrencies(my.appVM.loadCurrenciesCallback);
                $.getJSON('lp/Get_json/init_2',
                    function(data) {
                        console.log("loaded currencies")
                        console.dir(data);

                        dynamicCurrencies(data);
                        /*$.each(data, function (i, p) {
                            dynamicCurrencies.push(new my.Currency()
                                .currencyID(p.currencyID)
                                .currencyName(p.currencyName)
                                );
                        });*/
                        dynamicCurrencies = $.map(data, function(c){
                            return  new my.Currency()
                                .currencyID(c.currencyID)
                                .currencyName(c.currencyName);
                            //return c;
                        });
                        console.log(dynamicCurrencies);
                        // Let loading indicator know that this task has been completed
                        //self.loading.pop();
                        // Try to call success callback, which is loadUser if and only if all parallel processes have completed
                        //if (ctx && ctx.success !== 'undefined') {ctx.success();}
                    }
                );
            },
            loadAccounts = function () {
                //my.leftPanelDataService.getCurrencies(my.appVM.loadCurrenciesCallback);
                $.getJSON('lp/Get_json/init_1',
                    function(data) {
                        console.log("loaded accounts")
                        console.dir(data);
                        dynamicAccounts = $.map(data, function(c){
                        return  new my.Account()
                            .currencyID(c.currencyID)
                            .currencyName(c.currencyName)
                            .accountID(c.accountID)
                            .accountName(c.accountName)
                            .accountBalance(c.accountBalance)
                            .active(c.active);
                        //return c;
                        });
                    }
                );
            },
            // Middle Panel
            mainHeader = my.app.middlePanel.mainHeader,
            subHeader1 = my.app.middlePanel.subHeader1,
            subHeader2 = my.app.middlePanel.subHeader2,
            toolsBar = my.app.middlePanel.toolsBar,
            mpData = {},
            moreLink = my.app.middlePanel.moreLink,
            middlePanelView = function () {
                return "default";
            },
            renderMiddlePanel = function(){
        
            };
        return {
            overviewHeader: overviewHeader,
            currencies: currencies,
            accounts: accounts,
            schedules: schedules,
            budgets: budgets,
            preferences: preferences,
            selectedCurrency: selectedCurrency,
            dynamicCurrencies: dynamicCurrencies,
            dynamicAccounts: dynamicAccounts,
            //loadCurrenciesCallback: loadCurrenciesCallback,
            loadCurrencies: loadCurrencies,
            loadAccounts: loadAccounts,
            mainHeader: mainHeader,
            subHeader1: subHeader1,
            subHeader2: subHeader2,
            toolsBar: toolsBar,
            mpData: mpData,
            moreLink: moreLink,
            middlePanelView: middlePanelView
        };
    })();
