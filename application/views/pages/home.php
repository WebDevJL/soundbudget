<div id="main-container">
    <a id="logout" href="auth_logout">
        <img src="assets/logout-icon.png" id="logo" alt="Logout">
    </a>
    <header>
        <!--App logo here-->
        <a href="home">
            <img src="assets/app-logo.png" id="logo" alt="Application logo">
        </a>
    </header>
    <div id="panels-container">
        <div id="lp"><div class="box-scroll-vertical">
            <!-- Transactions -->
            <span class="l1" data-bind="text: tHeader"></span>
            <ul class="lp1-1" data-bind="foreach: tModules">
                <li>
                    <span class="l2" data-bind="text: header"></span>
                    <ul class="lp1-2" data-bind="foreach: modules">
                        <li>
                            <span class='account' data-bind="text: a"></span>
                            <span class='balance' data-bind="text: b"></span>
                        </li>
                    </ul>
                </li>
            </ul>
           <!-- Other modules -->
            <ul class="lp2-1" data-bind="foreach: oModules">
                <li>
                    <span class="l1" data-bind="text: header"></span>
                    <ul class="lp2-2" data-bind="foreach: modules">
                        <li>
                            <span class="l2" data-bind="text: $data"></span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div></div>
        <div id="mp">
            <div id="mp1">Middle panel</div>
            <div id="mp2">Right panel</div>
        </div>
    </div>
</div>