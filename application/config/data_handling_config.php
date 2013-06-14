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
$data_handle_config = array(
    'leftpanel' => array(
        'active_currencies' => array(
            'database' => array(
                'source' => 'USP_Currency_GetActiveItems',
                'params' => array(
                    'userID'
                )
            ),
            'cache' => array(
                'source' => 'Currency_per_user',
                'params' => array(
                    'userID'
                )
            )
        ),
        'active_accounts' => array(
            
        )
    ),
    'middlepanel' => array(
        
    ),
    'rightpanel' => array(
        
    )
);
?>
