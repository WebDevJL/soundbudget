define([
    'services/logger',
    'services/utils'
],
    function (logger, utils) {
        var check = {
            isValid: isValid,
            processError: processError
        };

        return check;

        function isValid(source, listOfObjects, sourceType) {
            var valid = false;
            switch (sourceType){
                case "account":
                    valid = checkAccount(source, listOfObjects);
                    break;
                default:
                    break;
            }
            return valid;
        }
        function checkAccount(account, accounts) {
            var check = true;
            var filters = ["accountName","currencyId"];
            if (account.currencyName === "" || account.currencyName === undefined){
                logger.error("Please select a currency!",null,null,true);
                check = false;
            } else if(account.accountName === '' || account.accountName === undefined) {
                logger.error("Please type a account name!",null,null,true);
                check = false;
            } else if (!utils.isDecimal(account.startingBalance)){
                logger.error("Please enter a correct starting number (example: 1000.06 or 1000,06!",null,null,true);
                check = false;
            } else if (containsIllegalChar(account.accountName)){
                logger.error("Hum... what are you trying to do? "+
                        account.accountName+
                        " contains illegal characters (/, \\, # and @)."
                        +
                        ". Please clean it up. Thanks.",null,null,true);
                check = false;
            } else if (!isUnique(account, accounts, filters)){
                logger.error("You already have an account named '"+
                        account.accountName+
                        "' in "+
                        account.currencyName+
                        ". Please choose another name or currency.",null,null,true);
                check = false;
            }
            return check;
        }
        function isUnique(objToCheck, list, filters) {
            var unique = false;
            for (var i = 0; i < list().length; i++) {
                var matchesFound = 0;
                for (var f = 0; f < filters.length; f++) {
                    if (list()[i][filters[f]] === objToCheck[filters[f]]) { 
                        matchesFound += 1;
                    }
                }
                if (filters.length === matchesFound){
                    unique = false;
                    break;
                }else{ unique = true; }
            }
            return unique;
        }
        function containsIllegalChar(input) {
            var bannedChars = ['/','\\','@','#'];
            for (var i = 0; i < bannedChars.length; i++) {
                if(~input.indexOf(bannedChars[i]) < 0) return true;
            }
            return false;
        }
        function processError(response) {
            if (response.redirectUrl !== undefined)
                window.location.replace(response.redirectUrl);
        }
    }
);
