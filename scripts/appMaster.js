$(function() {
    //alert("ko.applyBindings")
    ko.applyBindings(my.appVM);
    my.appVM.loadCurrencies();
    my.appVM.loadAccounts();
});
