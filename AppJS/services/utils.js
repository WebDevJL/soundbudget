define([], function (http) {
    var utils = {
        isNonblank: isNonblank,
        isWhole: isWhole,
        isInteger: isInteger,
        isDecimal: isDecimal,
        isCurrency: isCurrency,
        isEmail: isEmail,
        isValidCC: isValidCC
    };

    return utils;

    // Check if string is non-blank

    function isNonblank(s) {
        var isNonblank_re = /\S/;
        return String(s).search(isNonblank_re) !== -1;
    }
    // Check if string is a whole number(digits only).

    function isWhole(s) {
        var isWhole_re = /^\s*\d+\s*$/;
        return String(s).search(isWhole_re) !== -1;
    }
    // checks that an input string is an integer, with an optional +/- sign character.

    function isInteger(s) {
        var isInteger_re = /^\s*(\+|-)?\d+\s*$/;
        return String(s).search(isInteger_re) !== -1;
    }
    // Checks that an input string is a decimal number, with an optional +/- sign character.

    function isDecimal(s) {
        var isDecimal_re = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
        return String(s).search(isDecimal_re) !== -1;
    }
    // Check if string is currency

    function isCurrency(s) {
        var isCurrency_re = /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/;
        return String(s).search(isCurrency_re) !== -1;
    }
    // checks that an input string looks like a valid email address.

    function isEmail(s) {
        var isEmail_re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(s).search(isEmail_re) !== -1;
    }
    // Check for valid credit card type/number

    function isValidCC(cctype, ccnumber) {
        var creditCardList = [
            //type      prefix   length
            ["amex", "34", 15],
            ["amex", "37", 15],
            ["disc", "6011", 16],
            ["mc", "51", 16],
            ["mc", "52", 16],
            ["mc", "53", 16],
            ["mc", "54", 16],
            ["mc", "55", 16],
            ["visa", "4", 13],
            ["visa", "4", 16]
        ];
        var cc = getdigits(ccnumber);
        if (luhn(cc)) {
            for (var i in creditCardList) {
                if (creditCardList[i][0] === (cctype.toLowerCase())) {
                    if (cc.indexOf(creditCardList[i][1]) === 0) {
                        if (creditCardList[i][2] === cc.length) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
});