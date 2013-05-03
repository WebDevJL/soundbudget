
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
   <title>SoundBudget</title>
    <link href="css/styles.css" rel="stylesheet" type="text/css">
 </head>
 <body>
     <div id="main-container">
         <div id="l-c">
            <!--Login existing user-->
            <div id="l-form">
               <h1>Login to access your SoundBudget</h1>
               <?php echo validation_errors(); ?>
               <?php echo form_open('auth_verifylogin'); ?>
               <div class="userName">
                   <label for="userName">Username:</label>
                   <input type="text" size="20" id="username" name="userName"/>
               </div>
               <div class="clear"></div>
               <div class="password">
                   <label for="password">Your password:</label>
                   <input type="password" size="20" id="passowrd" name="password"/>
               </div>
               <div class="clear"></div>
               <input class="button" type="submit" value="Let's go!"/>
               </form>
            </div>
            <!-- Redirect to account creation-->
            <div id="l-link">
                <p>New user? <a href="CreateAccount">This way</a>, please</p>
            </div>
            <!-- Login to 3rd party providers -->
            <div id="l-3rdu">
                <p>Google, Facebook login coming soon...</p>
            </div>
         </div>
    </div>
 </body>
</html>

