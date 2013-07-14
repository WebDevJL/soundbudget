my.Account = function (item) {
    this.currencyID = ko.observable(item.currencyID);
    this.currencyName = ko.observable(item.currencyName);
    this.accountID = ko.observable(item.accountID);
    this.accountName = ko.observable(item.accountName);
    this.accountBalance = ko.observable(item.accountBalance);
    this.active = ko.observable(item.active);
};
