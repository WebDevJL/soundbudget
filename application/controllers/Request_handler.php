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
class Request_handler extends CI_Controller {
    /**
     * Constructor
     * 
     * @access public
     */
    function __construct()
    {
        parent::__construct();
        $this->load->model('Request_data_handler','r');
    }
    function Get_json($action){
        $this->r->Init($action);
        header('Content-type: application/json');
        echo json_encode($this->r->Retrieve_data($action, NULL));
    }
    function Process_request($action){
        $this->r->Init($action);
        $post_data = $this->input->get(NULL, TRUE);
        header('Content-type: application/json');
        echo json_encode($this->r->Retrieve_data($action, $post_data));
    }
}
