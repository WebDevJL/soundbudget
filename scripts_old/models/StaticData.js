my.data = (function (my) {
    "use strict";
    var leftPanel = {
        overviewHeader: "Overview",
        schedules: {
            "header": "Schedules",
            "list": [{
                "linkUrl": "/SoundBudget/mp/Schedules/lp_3.1",
                "linkText": "Normal"
            }, {
                "linkUrl": "/SoundBudget/mp/Schedules/lp_3.2",
                "linkText": "Budgets"
            }]
        },
        budgets: {
            "header": "Budgets",
            "list": [{
                "linkUrl": "/SoundBudget/mp/Budgets/lp_4.1",
                "linkText": "Recurring"
            }, {
                "linkUrl": "/SoundBudget/mp/Budgets/lp_4.2",
                "linkText": "One-time"
            }]
        },
        preferences: {
            "header": "Preferences",
            "list": [{
                "template": "accounts",
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.1",
                "linkText": "Accounts"
            }, {
                "template": "currencies",
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.2",
                "linkText": "Currencies"
            }, {
                "template": "categories",
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.3",
                "linkText": "Categories"
            }, {
                "template": "subcategories",
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.4",
                "linkText": "SubCategories"
            }, {
                "template": "payees",
                "linkUrl": "/SoundBudget/mp/Prefs/lp_6.5",
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
