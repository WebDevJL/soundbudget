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
console.log("step1");
my.getCurrencies = function () {
    $.getJSON('lp/Get_json/init_2',
        function(data) {
            $.each(data, function (i, p) {
                my.app.data.currencies.push(p);
            });
            /*my.app.data.currencies = $.map(data, function(c){
                return  new my.Currency(c);
                //return c;
            });*/
        }
    );
};
console.log("step2");
my.getAccounts = function () {
    $.getJSON('lp/Get_json/init_1',
        function(data) {
            $.each(data, function (i, p) {
                my.app.data.accounts.push(p);
            });
            /*my.app.data.accounts = $.map(data, function(a){
                return  new my.Account(a);
                //return a;
            });*/
        }
    );
};

my.app=(function(my){
    "use strict";
    var leftPanel = {
        overviewHeader : "Overview",
        currencies : {
            "list": [{
                "linkUrl": "/mp/Transactions/lp_1",//POST DATA= currencyID
                "currencyID": "1",
                "currencyName": "Euro"
            }, {
                "linkUrl": "/mp/Transactions/lp_1",//POST DATA= currencyID
                "currencyID": "2",
                "currencyName": "Dollar"
            }]
        },
        accounts : {
        "list" : [
            {
                    "linkUrl": "/mp/Transactions/lp_2",//POST DATA= accountID
                    "currencyID": "1",
                    "accountID": "1",
                    "accountName": "Account 1 Veerrryyyy longgggggggggg",
                    "balance": "0"
                }, {
                    "linkUrl": "/mp/Transactions/lp_2",//POST DATA= accountID
                    "currencyID": "1",
                    "accountID": "2",
                    "accountName": "Account 2",
                    "balance": "0"
                }, {
                    "linkUrl": "/mp/Transactions/lp_2",//POST DATA= accountID
                    "currencyID": "2",
                    "accountID": "3",
                    "accountName": "Account 3",
                    "balance": "0"
            }
        ]
    },
        schedules : {
        "header": "Schedules",
        "list": [{
                "linkUrl": "/mp/Schedules/lp_3.1",
                "linkText": "Normal"
        }, {
                "linkUrl": "/mp/Schedules/lp_3.2",
                "linkText": "Budgets"
        }]
    },
        budgets : {
        "header": "Budgets",
        "list": [{
                "linkUrl": "/mp/Budgets/lp_4.1",
                "linkText": "Recurring"
        }, {
                "linkUrl": "/mp/Budgets/lp_4.2",
                "linkText": "One-time"
        }]
    },
        preferences : {
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
        mainHeader : "Select something in the menu",
        subHeader1 : "",
        subHeader2 : "",
        toolsBar : {},
        moreLink : {
            moreText : "",
            moreLinkUrl : ""
        }
    },
    rightPanel = {

    },
    data = {
        currencies : [],//ko.observableArray([]),
        accounts : []//ko.observableArray([])
    };
    return {
        leftPanel: leftPanel,
        middlePanel: middlePanel,
        rightPanel: rightPanel,
        data: data
    };
})(my);
