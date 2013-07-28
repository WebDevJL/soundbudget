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
 * Request_handler
 *
 * Provides methods to retrieve the data to load the panels.
 *
 * @package		SoundBudget
 * @subpackage          Controllers
 * @category            Controller
 * @author		Jeremie Litzler
 */
class Request_handler extends CI_Controller {
    private $_request = NULL;
    private $_response_data = array();
    /**
     * Constructor
     * 
     * @access public
     */
    function __construct()
    {
        parent::__construct();
        $this->load->model('Handler','handler');
        $this->_Init();
    }
    /**
     * Process_request2
     * 
     * Receive request and echo the json response
     * 
     * @access  public
     * @param	string
     * @return	json object
     */
    function Process_request2($action){
        $this->_request['request_action'] = $action;
        $this->_request['request_data'] = $this->input->get(NULL, TRUE);//xss safe! Thanks Codeigniter!
        $this->_Route_request_to_handler($this->_request);
        header('Content-type: application/json');
        echo json_encode($this->_response_data);
    }
    /**
     * _Route_request_to_handler
     * 
     * Call the master handler passing the request 
     * and assign its response to the request response that will be json encoded.
     * 
     * @access  private
     * @param   associative array
     * @return	void
     */
    private function _Route_request_to_handler($request){
        $handler_response = NULL;
        $handler_response = $this->handler->Process_request($request);
        if(!is_null($handler_response)) {
            $this->_response_data = $handler_response;
        }
    }
    /**
     * _Init
     * 
     * Set default response object.
     * 
     * @access  private
     * @param   void
     * @return  void
     */
    private function _Init(){
        $this->_response_data["result"] = "false";
        $this->_response_data["message"] = "Something went wrong.";
        $this->_response_data["errorID"] = "-1";
        $this->_response_data["data"] = array();
    }
}
