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
 * Ajax_listener
 *
 * Provides methods to retrieve the data to load the panels.
 *
 * @package		SoundBudget
 * @subpackage          Controllers
 * @category            Controller
 * @author		Jeremie Litzler
 */
class Ajax_listener extends CI_Controller {
    /**
     * Constructor
     * 
     * @access public
     */
    function __construct()
    {
        parent::__construct();
        $this->load->model('Main_data_handler','mdh');
    }
    function getData($action){
        echo json_encode($this->mdh->Main($action));
    }
}
