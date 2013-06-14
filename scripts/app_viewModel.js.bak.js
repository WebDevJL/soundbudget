/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/******************************************************************************/
$(function() {
    //LeftPanel view model
    my.lpVM = (function() {
        var overviewHeader = my.leftPanel.overviewHeader,
        currencies = my.leftPanel.currencies,//ko.observableArray([]),
        selectedCurrency = ko.observable(""),
        accounts = my.leftPanel.accounts,
        filteredAccounts = ko.computed(function(){
            return this.overviewHeader;
        }),
        schedules = my.leftPanel.schedules,
        budgets = my.leftPanel.budgets,
        preferences = my.leftPanel.preferences,
        //load the observable array overview_links with sample data
        load = function(){
            my.lpVM.currencies = $.map(my.leftPanel.currencies, function(item){
                return  new currency_link()
                    .currencyID(item.currencyID)
                    .currencyName(item.currencyName)
                    .linkUrl(item.linkUrl);
            });
        };
        return {
            overviewHeader: overviewHeader,
            currencies: currencies,
            selectedCurrency: selectedCurrency,
            accounts: accounts,
            filteredAccounts: filteredAccounts,
            schedules: schedules,
            budgets: budgets,
            preferences: preferences,
            load: load
        };
    })();
    //my.lpVM.load();
    /******************************************************************************/
    var middlePanelViewModel = function(){

    };

    /******************************************************************************/
    var rightPanelViewModel = function(){

    };

    /******************************************************************************/
    var appViewModel = function(){

    };

    /******************************************************************************/
    ko.applyBindings(my.lpVM);
});
//Models down here
var currency_link = function(){
        this.currencyID = ko.observable();
        this.currencyName = ko.observable();
        this.linkUrl = ko.observable();
};
var account_link = function(){
        this.currencyID = ko.observable();
        this.accountID = ko.observable();
        this.accountName = ko.observable();
        this.balance = ko.observable();
        this.linkUrl = ko.observable();
};
