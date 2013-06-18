
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
   <title>SoundBudget</title>
    <link href="css/login.css" rel="stylesheet" type="text/css">
 </head>
 <body>
     <div id="main-container">
         <div id="l-c">
            <!--Login existing user-->
            <div id="l-form">
               <h1>Create your SoundBudget</h1>
               <?php echo validation_errors(); ?>
               <?php echo form_open('auth_addUser'); ?>
               <div>
                   <label for="userName">Choose your username:</label>
                   <input type="text" size="20" id="username" name="userName" value="<?php echo set_value('userName'); ?>"/>
               </div>
               <div>
                   <label for="password">Create your password:</label>
                   <input type="password" size="20" id="passowrd" name="password"/>
               </div>
               <div>
                   <label for="confirm_password">Confirm you password:</label>
                   <input type="password" size="20" id="confirm_password" name="confirm_password"/>
               </div>
               <div>
                   <label for="userEmail">Provide your email:</label>
                   <input type="userEmail" size="20" id="userEmail" name="userEmail" value="<?php echo set_value('userEmail'); ?>"/>
               </div>
               <input class="button" type="submit" value="Let's go!"/>
               </form>
            </div>
            <div id="l-link">
                <p>Existing user? <a href="/SoundBudget">This way</a>, please.</p>
            </div>
            <?php echo ( ! function_exists('mcrypt_encrypt')) ? 'Nope' : 'Yup'; ?>
         </div>
    </div>
 </body>
</html>

