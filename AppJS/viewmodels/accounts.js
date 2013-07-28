define([
    'services/dataservice', 
    'services/logger',
    'services/errorHandler',
    'models/AccountModel'
], 
function (datacx, logger, checker, account) {
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
            datacx.getJson('s_2').then(function(response) {
                that.currencies(response.items);
            });
            return datacx.getJson('s_1').then(function(response) {
                that.accounts(account.SetObservables(response.items));
            });
        },/*,
        select: function(item) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            item.viewUrl = 'views/detail';
            app.showModal(item);
        }*/
        addRow = function() {
            var accountToAdd = account.InitToAdd(
                    {
                        account: this,
                        currency: selectedCurrency(),
                        activeFlag: newAccountActiveFlag()
                    }
                );
            if(checker.isValid(accountToAdd,accounts,'account')){
                var dataToServer = account.SetAccountForInsert(accountToAdd);
                datacx.add('i_1', dataToServer).then(function(response) {
                    accountToAdd.accountId = response.items[0].accountId;
                    accounts.push(accountToAdd);
                    logger.success("The account has been added",null,null,true);
                });
            }
        },
        editRow = function() {
            var that = this, afterUpdate = {};
            if (that.editable()) afterUpdate = account.SetToCompare(that);
            if (!that.editable()) accountBeforeUpdate = account.SetToCompare(that);
            this.editable(!that.editable());
            
            if(!this.editable() && account.NeedToUpdate(afterUpdate, accountBeforeUpdate)) {
                console.log("need to update");
                var data = account.SetAccountForUpdate(that);
                datacx.remove('u_1', data).then(function(response) {
                    if(response.result === true) {
                        logger.success("Account '" + that.accountName + "' has been updated.",null,null,true);
                    }
                });
                if (that.editable) accountBeforeUpdate = {};
            } else { console.log("no need to update"); }
        },
        deleteRow = function() {
            var that = this;
            var data = account.SetAccountForDelete(that);
            datacx.remove('d_1', data).then(function(response) {
                if(response.result === true) {
                    logger.success("Account '" + that.accountName + "' has been deleted.",null,null,true);
                    accounts.remove(that);
                }
            }); 
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