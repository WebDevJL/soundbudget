<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Welcome to SoundBudget</title>
    <link href="css/jquery-ui-css/ui-lightness/jquery-ui.css" 
          rel="stylesheet" 
          type="text/css">
    <link href="css/reset.css" rel="stylesheet" type="text/css">
    <link href="css/main.css" rel="stylesheet" type="text/css">
    <!--<script data-main="scripts/main" src="scripts/require.js"></script>-->
    <script src="scripts/packages/jquery.js"></script>
    <script src="scripts/packages/jquery-ui.js"></script>
    <script src="scripts/packages/ko.js"></script>
    <script src="scripts/packages/koExternalTemplateEngine_all.js"></script>
    <script src="scripts/packages/ko.mapping.js"></script>
    <script src="scripts/packages/underscore.js"></script>
    <script src="scripts/packages/utils.js"></script>
    <script src="scripts/my.js"></script>
    <script src="scripts/services/ajaxservice.js"></script>
    <script src="scripts/services/leftPanelDataService.js"></script>
    <script src="scripts/models/Currency.js"></script>
    <script src="scripts/models/Account.js"></script>
    <script src="scripts/viewmodels/appViewModel.js"></script>
    <script src="scripts/ui/main.js"></script>
</head>
<body>
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