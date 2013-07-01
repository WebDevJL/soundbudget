<div id="lp" class="box-scroll-vertical"><div >
    <!-- Overview -->
    <span class="lp_header" data-bind="text: overviewHeader"></span>
    <select id="lp_currencies" class="lp_sub" data-bind="
            options: dynamicCurrencies,
            value: selectedCurrency,
            optionsText: 'currencyName'">
    </select>
    <ul class="lp_sub" data-bind="foreach: filteredAccounts">
        <li class="account_table" data-bind="attr: {title: accountName}">
            <a data-bind="attr: {href:accountURL}">
                <span class="accountName" data-bind="text: accountName"></span>
                <span class="accountBalance" data-bind="text: accountBalance"></span>
            </a>
        </li>
    </ul>
   <!-- Other modules -->
   <span class="lp_header" data-bind="text: schedules.header"></span>
   <ul class="lp_sub" data-bind="foreach: schedules.list">
       <li>
           <a data-bind="attr: {href: linkUrl}"><span data-bind="text: linkText"></span></a>
       </li>
   </ul>
   <span class="lp_header" data-bind="text: budgets.header"></span>
   <ul class="lp_sub" data-bind="foreach: budgets.list">
       <li>
           <a data-bind="attr: {href: linkUrl}"><span data-bind="text: linkText"></span></a>
       </li>
   </ul>
   <span class="lp_header" data-bind="text: preferences.header"></span>
   <ul class="lp_sub" data-bind="foreach: preferences.list">
       <li>
           <a data-bind="attr: {href: linkUrl}"><span data-bind="text: linkText"></span></a>
       </li>
   </ul>
</div></div>