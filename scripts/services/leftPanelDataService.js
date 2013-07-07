// shoppingDataService
// John Papa http://johnpapa.net
// Depends on scripts:
//                         ajaxservice.js
(function (my) {
    "use strict";
    my.leftPanelDataService = {
        getCurrencies : function (callback) {
            //my.ajaxService.ajaxGetJsonp("GetSaleItems", null, callback);
            my.ajaxService.ajaxGetJson("lp/Get_json/init_2", null, callback);
        },
        getAccounts : function (callback) {
            //my.ajaxService.ajaxGetJsonp("GetSaleItems", null, callback);
            my.ajaxService.ajaxGetJson("lp/Get_json/init_", null, callback);
        }
    };
}(my));