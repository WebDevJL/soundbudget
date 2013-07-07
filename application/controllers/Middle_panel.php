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
class Middle_panel extends CI_Controller {
    /**
     * Constructor
     * 
     * @access public
     */
    function __construct()
    {
        parent::__construct();
        //$this->load->model('Left_data_handler','ldh');
    }
    function Get_json($action){
        $this->ldh->Init($action);
        header('Cache-Control: no-cache, must-revalidate');
        header('Expires: Mon, 03 Jul 2013 05:00:00 GMT');
        header('Content-type: application/json');
        echo json_encode($this->ldh->Retrieve_data($action));
    }
    function Accounts($param) {
        $this->load->view('templates/header');
        $this->load->view('templates/leftPanel');
        $this->load->view('templates/middlePanel_Transactions');
        $this->load->view('templates/rightPanel');
        $this->load->view('templates/footer');
    }
}
