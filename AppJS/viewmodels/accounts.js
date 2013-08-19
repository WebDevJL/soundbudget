define([
    'services/dataservice', 
    'services/logger',
    'services/errorHandler',
    'models/AccountModel',
    'models/CurrencyModel'
], 
function (datacx, logger, checker, account, currency) {
    var mainHeader = 'Preferences',
        subHeader1 = 'Accounts',
        subHeader2 = '',
        seperator = '›',
        tableHeaders = {
                'rowType': 'header',
                'currencyName': 'Currency',
                'accountName': 'Account',
                'active': 'Active',
                'startingBalance': 'Starting Balance',
                'accountBalance': 'Current'
        },
        insertForm = account.InitAccount(),
        accounts = ko.observableArray([]),
        currencies = ko.observableArray([]),
        selectedCurrency = ko.observable(),
        newAccountActiveFlag = ko.observable(true),
        accountBeforeUpdate = {},
        activate = function () {
            //the router's activator calls this function and waits for it to complete before proceding
            if (accounts().length > 0) {
                return;
            }
            var that = this;
            currency.GetAll(that.currencies);
            return account.GetAll(that.accounts);
        },
        addRow = function() {
            var accountToAdd = account.InitToAdd(
                    {
                        account: this,
                        currency: selectedCurrency(),
                        activeFlag: newAccountActiveFlag()
                    }
                );
            account.Insert(accountToAdd,accounts);
        },
        editRow = function() {
            var that = this, afterUpdate = {}, ready = false;
            if (!that.editable()) {
                accountBeforeUpdate = account.SetToCompare(that);
                this.editable(!that.editable());
            } else {
                afterUpdate = account.SetToCompare(that);
                ready = true;
            }
            if(ready && account.NeedToUpdate(afterUpdate, accountBeforeUpdate)) {
                account.Update(afterUpdate,that);
                if (that.editable) accountBeforeUpdate = {};
            }
        },
        deleteRow = function() {
            account.Delete(this,accounts);
        };
    
    newAccountActiveFlag.subscribe(function(){});
    
    var vm = {
        mainHeader: mainHeader,
        subHeader1: subHeader1,
        subHeader2: subHeader2,
        seperator: seperator,
        tableHeaders: tableHeaders,
        insertForm: insertForm,
        accounts: accounts,
        currencies: currencies,
        selectedCurrency: selectedCurrency,
        newAccountActiveFlag: newAccountActiveFlag,
        accountBeforeUpdate: accountBeforeUpdate,
        activate: activate,
        addRow: addRow,
        editRow: editRow,
        deleteRow: deleteRow
    };
    
    return vm;
});