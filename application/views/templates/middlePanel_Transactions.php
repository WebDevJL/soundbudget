<div id="mp">
    <div id="mp1">
        <ul>
            <li class="mp_header">
                <span class="mp_header_main" data-bind="text: middlePanelHeader"></span>
                <span class="mp_header_sub" data-bind="text: currencyName"></span>
                <span class="mp_header_sub" data-bind="text: accountName, visible: accountClicked"></span>
            </li>
            <li class="mp_toolbar">
                <ul>
                    <li class="mp_toolbar_element" data-bind="foreach: toolbarElements">
                        <a data-bind="attr: {href: filterLinkUrl, title: filterTitle}, text: filterText"></a>
                    </li>
                </ul>
            </li>
            <li class="mp_data_table">
                
            </li>
            <li class="mp_morelink">
                <a data-bind="attr: {href: moreLinkUrl, title: moreTitle}, text: moreText"></a>
            </li>
        </ul>
    </div>