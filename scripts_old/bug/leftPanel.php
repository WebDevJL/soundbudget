<div id="lp" class="box-scroll-vertical"><div >
    <!-- Overview -->
    <span class="lp_header" data-bind="text: overviewHeader"></span>
    <select class="lp_sub" data-bind="
            options: currencies.list,
            value: selectedCurrency,
            optionsText: 'currencyName'">
    </select>
    <ul class="lp_sub" data-bind="foreach: accounts">
        <li class="account_table" data-bind="attr: {title: accountName}">
            <span class="accountName" data-bind="text: accountName"></span>
            <span class="accountBalance" data-bind="text: balance"></span>
        </li>
    </ul>
   <!-- Other modules -->
   <span class="lp_header" data-bind="text: schedules.header"></span>
   <ul class="lp_sub" data-bind="foreach: schedules.list">
       <li>
           <span data-bind="text: linkText"></span>
       </li>
   </ul>
   <span class="lp_header" data-bind="text: budgets.header"></span>
   <ul class="lp_sub" data-bind="foreach: budgets.list">
       <li>
           <span data-bind="text: linkText"></span>
       </li>
   </ul>
   <span class="lp_header" data-bind="text: preferences.header"></span>
   <ul class="lp_sub" data-bind="foreach: preferences.list">
       <li>
           <span data-bind="text: linkText"></span>
       </li>
   </ul>
</div></div>