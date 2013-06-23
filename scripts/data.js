my.app=(function(my){
    "use strict";
    var leftPanel = {
        overviewHeader : "Overview",
        currencies : {
            "list": [{
                "linkUrl": "/SoundBudget/mp/Transactions/lp_1",//POST DATA= currencyID
                "currencyID": "1",
                "currencyName": "Euro"
            }, {
                "linkUrl": "/SoundBudget/mp/Transactions/lp_1",//POST DATA= currencyID
                "currencyID": "2",
                "currencyName": "Dollar"
            }]
        },
        accounts : {
        "list" : [
            {
                    "linkUrl": "/SoundBudget/mp/Transactions/lp_2",//POST DATA= accountID
                    "currencyID": "1",
                    "accountID": "1",
                    "accountName": "Account 1 Veerrryyyy longgggggggggg",
                    "balance": "0"
                }, {
                    "linkUrl": "/SoundBudget/mp/Transactions/lp_2",//POST DATA= accountID
                    "currencyID": "1",
                    "accountID": "2",
                    "accountName": "Account 2",
                    "balance": "0"
                }, {
                    "linkUrl": "/SoundBudget/mp/Transactions/lp_2",//POST DATA= accountID
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
                "linkUrl": "/SoundBudget/mp/Schedules/lp_3.1",
                "linkText": "Normal"
        }, {
                "linkUrl": "/SoundBudget/mp/Schedules/lp_3.2",
                "linkText": "Budgets"
        }]
    },
        budgets : {
        "header": "Budgets",
        "list": [{
                "linkUrl": "/SoundBudget/mp/Budgets/lp_4.1",
                "linkText": "Recurring"
        }, {
                "linkUrl": "/SoundBudget/mp/Budgets/lp_4.2",
                "linkText": "One-time"
        }]
    },
        preferences : {
        "header": "Preferences",
        "list": [{
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.1",
                "linkText": "Accounts"
            }, {
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.2",
                "linkText": "Currencies"
            }, {
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.3",
                "linkText": "Categories"
            }, {
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.4",
                "linkText": "SubCategories"
            }, {
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.5",
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

    };
    return {
        leftPanel: leftPanel,
        middlePanel: middlePanel,
        rightPanel: rightPanel
    };
})(my);

