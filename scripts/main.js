/* 
 * This is where the logic to load JS script on demand happens
 * Below, a example:
 *
 * require(["helper/util"], function(util) {
 *    //This function is called when scripts/helper/util.js is loaded.
 *    //If util.js calls define(), then this function is not fired until
 *    //util's dependencies have loaded, and the util argument will hold
 *    //the module value for "helper/util".
 * });
 * 
 */

//Load KnockoutJS and the modelview
//require(['ko', 'models/LeftPanelModel'], function(ko, LeftPanelModel) {
//    ko.applyBindings(LeftPanelModel, document.getElementById('lp'))//Left panel
//});
//require(['knockout', 'models/App', 'domReady!'], function(ko, MiddlePanelModel) {
//    ko.applyBindings(MiddlePanelModel, document.getElementById('mp1'))//Middle panel
//});
//require(['knockout', 'models/App', 'domReady!'], function(ko, RightPanelModel) {
//    ko.applyBindings(RightPanelModel, document.getElementById('mp2'))//Right panel
//});
//require(['knockout', 'models/App', 'domReady!'], function(ko, UserSettingsPanelModel) {
//    ko.applyBindings(UserSettingsPanelModel, document.getElementById('usp'))//User Settings panel
//});
ko.applyBindings(LeftPanelModel(), document.getElementById('lp'));//Left panel
//ko.applyBindings(new MiddlePanelModel(), document.getElementById('mp1'));//Middle panel
//ko.applyBindings(new RightPanelModel(), document.getElementById('mp2'));//Right panel
//ko.applyBindings(new UserSettingsPanelModel(), document.getElementById('usp'));//User Settings panel
