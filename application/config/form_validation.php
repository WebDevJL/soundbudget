<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * SoundBudget
 *
 *
 * @package		SoundBudget
 * @author		Jeremie Litzler
 * @copyright           Copyright (c) 2013.
 * @since		Version 1.0
 * @filesource
 */
// ------------------------------------------------------------------------

/**
 * Form validation 
 *
 * Provides an array of sets of rules in order to organize the rules into 
 * "sets".
 * More info here: http://ellislab.com/codeigniter/user-guide/libraries/form_validation.html#savingtoconfig
 *
 * @package		SoundBudget
 * @subpackage          Config
 * @category            Config file
 * @author		Jeremie Litzler
 */
$config = array(
    'login' => array(
        array(
                'field' => 'username',
                'label' => 'Username',
                'rules' => 'required'
            ),
        array(
                'field' => 'password',
                'label' => 'Password',
                'rules' => 'required'
            ),
        array(
                'field' => 'passconf',
                'label' => 'PasswordConfirmation',
                'rules' => 'required'
            ),
        array(
                'field' => 'email',
                'label' => 'Email',
                'rules' => 'required'
            )
        ),
    'create_account' => array(
        array(
                'field' => 'emailaddress',
                'label' => 'EmailAddress',
                'rules' => 'required|valid_email'
            ),
        array(
                'field' => 'name',
                'label' => 'Name',
                'rules' => 'required|alpha'
            ),
        array(
                'field' => 'title',
                'label' => 'Title',
                'rules' => 'required'
            ),
        array(
                'field' => 'message',
                'label' => 'MessageBody',
                'rules' => 'required'
            )
        )                          
);
?>
