define([
    'services/dataservice', 
    'services/logger'], 
function (datacx, logger) {
    var mainHeader = 'Preferences',
        subHeader1 = 'Accounts',
        subHeader2 = '',
        seperator = '›',
        tableHeaders = {
                'rowType': 'header',
                'currencyID': '',
                'currencyName': 'Currency',
                'accountID': '',
                'accountName': 'Account',
                'active': 'Active',
                'accountBalance': 'Balance'
        },
        defaultRow = {
                'rowType': 'insert',
                'currencyName': '',
                'accountName': '',
                'active': '0',
                'accountBalance': ''
        },
        accounts = ko.observableArray([]),
        currencies = ko.observableArray([]),
        selectedCurrency = ko.observable(),
        activate = function () {
            //the router's activator calls this function and waits for it to complete before proceding
            if (accounts().length > 0) {
                return;
            }

            var that = this;
            datacx.getJson('init_2').then(function(response) {
                that.currencies(response.items);
            });
            return datacx.getJson('init_1').then(function(response) {
                that.accounts(response.items);
                that.accounts.unshift(that.defaultRow);
                that.accounts.unshift(that.tableHeaders);
            });
        },/*,
        select: function(item) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            item.viewUrl = 'views/detail';
            app.showModal(item);
        }*/
        addRow = function() {
            return this.rowType === 'header' ? 'rowHeader' : 'rowData';
        },
        editRow = function() {
            console.log("rowType="+this.rowType);
            return this.rowType === 'header' ? true : false;
        },
        deleteRow = function() {
            var that = this;
            console.log(that);
            http.get('rq/Process_request/mp_4-2', that).then(function(response) {
                logger.log(
                        "Account '" + that.accountName + "' has been deleted.",
                        null,
                        null,
                        true
                );
                accounts.remove(that);
            }); 
        };
    
    var vm = {
        mainHeader: mainHeader,
        subHeader1: subHeader1,
        subHeader2: subHeader2,
        seperator: seperator,
        tableHeaders: tableHeaders,
        defaultRow: defaultRow,
        accounts: accounts,
        currencies: currencies,
        selectedCurrency: selectedCurrency,
        activate: activate,
        addRow: addRow,
        editRow: editRow,
        deleteRow: deleteRow
    };
    
    return vm;
});