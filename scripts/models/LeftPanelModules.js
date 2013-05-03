/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/***************************************************/
/*  Function to build the Other modules
 *  which includes:
 *      - Schedules
 *      - Budgets
 *      - Preferences     
 */
function Module(header, modules2) {
    var self = this;
    self.header = header;
    self.modules = ko.observableArray(modules2);
}
/***************************************************/
//  Variable to build the bindings
//define(['knockout'], function(ko) {
//    return function MiddlePanelModel() {
//        //All the logic of the Left panel UI below
//        var self = this;
//    };
//});