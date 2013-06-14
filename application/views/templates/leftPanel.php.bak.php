<div id="lp"><div class="box-scroll-vertical">
    <!-- Overview -->
    <span class="l1" data-bind="text: overviewHeader"></span>
    <select class="lp1-1" data-bind="
            options: currencies.list,
            value: selectedCurrency,
            optionsText: 'currencyName'">
    </select>
    <ul class="lp1-2" data-bind="foreach: accounts.list">
        <li>
            <span class='account' data-bind="text: accountName"></span>
            <span class='balance' data-bind="text: balance"></span>
        </li>
    </ul>
   <!-- Other modules -->
   <span class="l1" data-bind="text: schedules.header"></span>
   <ul class="lp1-2" data-bind="foreach: schedules.list">
       <li>
           <span data-bind="text: linkText"></span>
       </li>
   </ul>
   <span class="l1" data-bind="text: budgets.header"></span>
   <ul class="lp1-2" data-bind="foreach: budgets.list">
       <li>
           <span data-bind="text: linkText"></span>
       </li>
   </ul>
   <span class="l1" data-bind="text: preferences.header"></span>
   <ul class="lp1-2" data-bind="foreach: preferences.list">
       <li>
           <span data-bind="text: linkText"></span>
       </li>
   </ul>
</div></div>