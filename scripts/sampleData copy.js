var my = my || {}; //my namespace
my.leftPanel=(function(my){
    "use strict";
    var overviewHeader = "Overview";
    var currencies = {
        "list": [{
                "linkUrl": "/SoundBudget/mp/Transactions/lp_1",//POST DATA= currencyID
                "currencyID": "1",
                "currencyName": "Euro"
        }, {
                "linkUrl": "/SoundBudget/mp/Transactions/lp_1",//POST DATA= currencyID
                "currencyID": "2",
                "currencyName": "Dollar"
        }]
    };
    var accounts = {
        "list" : [
            {
                    "linkUrl": "/SoundBudget/mp/Transactions/lp_2",//POST DATA= accountID
                    "currencyID": "1",
                    "accountID": "1",
                    "accountName": "Account 1",
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
    };
    var schedules = {
        "header": "Schedules",
        "list": [{
                "linkUrl": "/SoundBudget/mp/Schedules/lp_3.1",
                "linkText": "Normal"
        }, {
                "linkUrl": "/SoundBudget/mp/Schedules/lp_3.2",
                "linkText": "Budgets"
        }]
    };
    var budgets = {
        "header": "Budgets",
        "list": [{
                "linkUrl": "/SoundBudget/mp/Budgets/lp_4.1",
                "linkText": "Recurring"
        }, {
                "linkUrl": "/SoundBudget/mp/Budgets/lp_4.2",
                "linkText": "One-time"
        }]
    };
    var preferences = {
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
    };
    return {
        overviewHeader : overviewHeader,
        currencies: currencies,
        accounts: accounts,
        schedules: schedules,
        budgets: budgets,
        preferences: preferences
    };
})(my);

