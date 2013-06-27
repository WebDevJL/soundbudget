/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/******************************************************************************/
$(function() {
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
    console.log("step3");
    my.getCurrencies();
    my.getAccounts();
    console.log("step4");

    my.appVM = (function() {
        /***********************************************************/
        var 
        // LeftPanel
            overviewHeader = my.app.leftPanel.overviewHeader,
            currencies = my.app.leftPanel.currencies,//ko.observableArray([]),
            //currencies = my.app.data.currencies,
            selectedCurrency = ko.observable(""),
            accounts = ko.computed(function(){
                if(!selectedCurrency()){
                    return null;
                }
                var filter = selectedCurrency().currencyID;
                //return ko.utils.arrayFilter(my.app.leftPanel.accounts.list, function (item) {
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
            mainHeader: mainHeader,
            subHeader1: subHeader1,
            subHeader2: subHeader2,
            toolsBar: toolsBar,
            mpData: mpData,
            moreLink: moreLink,
            middlePanelView: middlePanelView
        };
    })();
    //my.appVM.currencies(my.app.data.currencies);
    //console.log(my.app.leftPanel.accounts.list);
    console.log("step4");

    console.log("dynamic currencies: " +my.app.data.currencies);
    console.log("dynamic accounts: " +my.app.data.accounts);
    console.log("static currencies: " +my.app.leftPanel.currencies.list);
    console.log("static accounts: " +my.app.leftPanel.accounts.list);
    console.log("my.appVM.currencies: " +my.appVM.currencies);
    console.log("step5");
    ko.applyBindings(my.appVM);
    console.log("step6");
    console.log(my.app.data.currencies);
    console.log(my.app.data.accounts);

});
