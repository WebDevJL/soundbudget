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
    <!--<script data-main="scripts/init" src="scripts/require.js"></script>-->
    <script src="scripts/jquery.js"></script>
    <script src="scripts/jquery-ui.js"></script>
    <script src="scripts/ko.js"></script>
    <script src="scripts/koExternalTemplateEngine_all.js"></script>
    <script src="scripts/ko.mapping.js"></script>
    <script src="scripts/underscore.js"></script>
    <script src="scripts/utils.js"></script>
    <script src="scripts/my.js"></script>
    <script src="scripts/ajaxservice.js"></script>
    <script src="scripts/leftPanelDataService.js"></script>
    <!--<script src="scripts/data.js"></script>-->
    <script src="scripts/models/appViewModel.js"></script>
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