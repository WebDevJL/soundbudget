/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/******************************************************************************/
$(function() {
    my.appVM = (function() {
        infuser.defaults.templateSuffix = ".tmpl.html";
        infuser.defaults.templateUrl = "/SoundBudget/templates_JS";

        var overviewHeader = my.app.leftPanel.overviewHeader,
            currencies = my.app.leftPanel.currencies,//ko.observableArray([]),
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
            load = function(){
                my.appVM.currencies = $.map(my.app.leftPanel.currencies, function(item){
                    return  new currency_link()
                        .currencyID(item.currencyID)
                        .currencyName(item.currencyName)
                        .linkUrl(item.linkUrl);
                });
            },
            mainHeader = my.app.middlePanel.mainHeader,
            subHeader1 = my.app.middlePanel.subHeader1,
            subHeader2 = my.app.middlePanel.subHeader2,
            toolsBar = my.app.middlePanel.toolsBar,
            mpData = {},
            moreLink = my.app.middlePanel.moreLink,
            middlePanelView = function () {
                return "default";
            };
        return {
            overviewHeader: overviewHeader,
            currencies: currencies,
            accounts: accounts,
            schedules: schedules,
            budgets: budgets,
            preferences: preferences,
            selectedCurrency: selectedCurrency,
            load: load,
            mainHeader: mainHeader,
            subHeader1: subHeader1,
            subHeader2: subHeader2,
            toolsBar: toolsBar,
            mpData: mpData,
            moreLink: moreLink,
            middlePanelView: middlePanelView
        };
    })();
    //my.lpVM.load();
    ko.applyBindings(my.appVM);
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
