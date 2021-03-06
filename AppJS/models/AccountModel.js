define([
    'services/dataservice', 
    'services/logger',
    'services/errorHandler'
], function (datacx, logger, checker) {
        var AccountModel = {
            accountsList: accountsList,
            InitToAdd: InitToAdd,
            InitAccount: InitAccount,
            NeedToUpdate: NeedToUpdate,
            SetToCompare: SetToCompare,
            GetAll: GetAll,
            Insert: Insert,
            Update: Update,
            Delete: Delete,
            SetAccountForInsert: SetAccountForInsert,
            SetAccountForUpdate: SetAccountForUpdate,
            SetAccountForDelete: SetAccountForDelete,
            SetObservables: SetObservables
        };

        return AccountModel;
        
        var accountsList = ko.observableArray([]);
        function GetAll(accountsObservable) {
            return datacx.getJson('s_1').then(function(response) {
                if(response.result) {
                    accountsObservable(SetObservables(response.items));                    
                } else {
                    logger.info("You're not able to add accounts at the moment. Please come back later.",null,null,true);
                }
            });
        }
        function Update(accountToUpdate,accountObservable) {
            var data = SetAccountForUpdate(accountToUpdate);
            datacx.submit('u_1', data).then(function(response) {
                if(response.result === true) {
                    logger.success("Account '" + accountToUpdate.accountName + "' has been updated.",null,null,true);
                    accountObservable.editable(false);
                } else { checker.processError(response); }
                return true;
            });
        }
        function Insert(accountToAdd,accounts) {
            if(checker.isValid(accountToAdd,accounts,'account')){
                var dataToServer = SetAccountForInsert(accountToAdd);
                datacx.submit('i_1', dataToServer).then(function(response) {
                    if(response.result === true) {
                        accountToAdd.accountId = response.items;
                        accounts.push(accountToAdd);
                        logger.success("The account has been added",null,null,true);
                    } else { checker.processError(response); }
                });
            }
        }
        function Delete(account,accounts) {
            var data = SetAccountForDelete(account);
            datacx.submit('d_1', data).then(function(response) {
                if(response.result === true) {
                    logger.success("Account '" + account.accountName + "' has been deleted.",null,null,true);
                    accounts.remove(account);
                } else { checker.processError(response); }
            });
        }
        function InitToAdd(data) {
            var account = InitAccount();
            account = ProcessAccountToAdd(data);
            return account;            
        }
        function NeedToUpdate(newAccount, oldAccount) {
            return JSON.stringify(newAccount) !== JSON.stringify(oldAccount);
        }
        function SetToCompare(account) {
            return {
                accountId: account.accountId,
                accountName: account.accountName,
                startingBalance: account.startingBalance,
                active: (account.active) ? '1' : '0'
            };
        }
        function SetAccountForInsert(account) {
            return {
                id1: account.currencyId,
                string1: account.accountName,
                float1: account.startingBalance,
                bool1: (account.active) ? '1' : '0'
            };
        }
        function SetAccountForUpdate(account) {
            return {
                id1: account.accountId,
                string1: account.accountName,
                float1: account.startingBalance,
                bool1: (account.active) ? '1' : '0'
            };
        }
        function SetAccountForDelete(account) {
            return {
                id1: account.accountId
            };
        }
        function SetObservables(accounts) {
            var processedAccounts = [];
            $.each(accounts, function (i, a) {
                processedAccounts.push(SetAccountWithObservables(a));
            });
            return processedAccounts;
        }
        function SetAccountWithObservables(account) {
            return {
                accountId: account.accountId,
                accountName: account.accountName,
                currencyId: account.currencyId,
                currencyName: account.currencyName,
                currencySymbol: account.currencySymbol,
                accountBalance: account.accountBalance,
                startingBalance: account.startingBalance,
                active: (account.active === '1') ? true : false,
                editable: ko.observable(account.editable)
            };
        }
        function InitAccount() {
            return {
                accountId: 0,
                accountName: "",
                currencyId: "",
                currencyName: "",
                currencySymbol: "",
                accountBalance: "",
                startingBalance: "0.00",
                active: true,
                editable: ko.observable(false)
            };
        }
        function ProcessAccountToAdd(data) {
            var account = {};
            if(data.currency !== undefined){
                account.currencyId = data.currency.currencyId;
                account.currencyName = data.currency.currencyName;
                account.currencySymbol = data.currency.currencySymbol;
            }
            account.accountName = data.account.accountName;
            account.startingBalance = 
                    parseFloat(
                        data.account.startingBalance.replace(',','.')
                    )
                    .toFixed(2);
            account.accountBalance = account.startingBalance;
            if (data.activeFlag) {account.active = true;} else {account.active = false;}
            account.editable = ko.observable(false);
            return account;
        }
    }
);
