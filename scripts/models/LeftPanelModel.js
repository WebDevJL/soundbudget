/* 
 * This is the main JS file for the application
 * It uses KnockoutJS to build a efficient UI that stays synched with the DATA .
 */

function LeftPanelModel(){
  //All the logic of the Left panel UI below
  // Data
  var self = this;
  /* 
   *    Logo item
   */
  self.logoUrl = ""
  /*    Transaction modules
   *    This is a 2-level sections
   *    Repeat if needed
   */
  self.tHeader = 'Transactions';
  self.tModules = [
      new Module('Currency1',[
          {a:'Account1',b:'1250'},
          {a:'Account2',b:'105'},
          {a:'Account3',b:'324,45'},
          {a:'Account4',b:'-0,54'}
      ]),
      new Module('Currency2',[
          {a:'Account1',b:'0,56'},
          {a:'Account2',b:'120'},
          {a:'Account3',b:'4556'}
      ])
  ];
  /*    Others modules (e.g schedules, budgets, preferences...)
   *    These are 1-level section list
   *    Add "Module when needed.
   */
  self.oModules  = [
      new Module('Schedules',['Normal','Budgets']),
      new Module('Budgets',['Recurring','One-Time']),
      new Module('Preferences',[
        'Accounts',
        'Currencies',
        'Categories',
        'SubCategories',
        'Payees'
      ])
    ];
};

//define(['ko'], function(ko) {
//    return function LeftPanelModel() {
//      //All the logic of the Left panel UI below
//      // Data
//      var self = this;
//      self.oModules  = [
//          new Module('Schedules',['Normal','Budgets']),
//          new Module('Budgets',['Recurring','One-Time']),
//          new Module('Preferences',[
//            'Accounts',
//            'Currencies',
//            'Categories',
//            'SubCategories',
//            'Payees'
//          ])
//       ];
//       self.tHeader = 'Transactions';
//       self.tModules = [
//           new Module(
//               'Currency1',[
//                   {a:'Account1',b:'1250'},
//                   {a:'Account2',b:'105'},
//                   {a:'Account3',b:'324,45'},
//                   {a:'Account4',b:'-0,54'}
//           ]),
//           new Module(
//               'Currency2',[
//                   {a:'Account1',b:'0,56'},
//                   {a:'Account2',b:'120'},
//                   {a:'Account3',b:'4556'}
//           ])
//        ];    
//    };
//});
//});
//
//define(['knockout'], function(ko) {
//    return function MiddlePanelModel() {
//        //All the logic of the Left panel UI below
//        var self = this;
//    };
//});
//
//define(['knockout'], function(ko) {
//    return function RightPanelModel() {
//        //All the logic of the Middle panel UI below
//        var self = this;
//    };
//});
//
//define(['knockout'], function(ko) {
//    return function UserSettingsPanelModel() {
//        //All the logic of the Right panel UI below
//        var self = this;
//    };
//});