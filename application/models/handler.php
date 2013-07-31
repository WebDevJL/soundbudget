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
 * Handler
 *
 * Provide methods to retrieve data from a MySQL database.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class Handler extends CI_Model
{
    private $_request = array();
    private $_data_to_return = array();
    /**
     * Constructor
     * 
     * @access public
     */
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();       
        $this->load->model('User','user');
        $this->user->Load_session_data();
        $this->load->model('Event_configuration','event_config');
        $this->load->model('Main_data_handler','mdh');
    }
    /**
     * Init
     * 
     * init method to retrieve the source to use to load data
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Init($request){
        $this->_request['request_action'] = $request["request_action"];
        $this->_request['request_query_details'] 
                = $this->event_config->Get_query_details_for_action($this->_request['request_action']);
        error_log(gettype($request['request_data']));
        if($request['request_data'] !== FALSE) {
            $this->_request['request_data'] = $request["request_data"];
        }
        $this->_Parse_action();
        $this->_Prepare_stored_procedure();
    }
    /**
     * MethodTemplate
     * 
     * description
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Process_request($request){
        if($this->user->is_logged )
        {
            $this->Init($request);
            switch ($this->_request['request_params'][0]) {
                case "s":
                    $this->load->model('Handler_select','select');
                    $this->_data_to_return = $this->select->Run($this->_request);
                    break;
                case "u":
                    $this->load->model('Handler_update','update');
                    $this->_data_to_return = $this->update->Run($this->_request);
                    break;
                case "i":
                    $this->load->model('Handler_insert','insert');
                    $this->_data_to_return = $this->insert->Run($this->_request);
                    break;
                case "d":
                    $this->load->model('Handler_delete','delete');
                    $this->_data_to_return = $this->delete->Run($this->_request);
                    break;
                default:
                    break;
            }
        }else{ $this->_Set_access_denied_response(); }
        return $this->_data_to_return;
    }
    /**
     * MethodTemplate
     * 
     * description
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    private function _Parse_action() {
        $this->_request['request_params'] = explode("_",$this->_request['request_action']);
    }
    /**
     * MethodTemplate
     * 
     * description
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    private function _Set_access_denied_response() {
        $this->_data_to_return['result'] ='false';
        $this->_data_to_return['message'] ='Access denied';
        $this->_data_to_return['items'] = array();
    }
    /**
     * _Prepare_stored_procedure
     * 
     * Replace placeholders in the stored procedure found and put in the proper
     * values.
     * 
     * Think about how you build your stored procedure to see if you can't 
     * already use a case.
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    private function _Prepare_stored_procedure() {
        $stored_prepared = $this->_request['request_query_details']['source'];
        switch ($this->_request['request_query_details']['paramID']) {
            case '1'://only userID as parameter
                $stored_prepared = sprintf(
                        $stored_prepared,
                        $this->user->user_session_data['userID']
                        );
                break;
            case '2'://params: userID and any integer
                $stored_prepared = sprintf(
                        $stored_prepared,
                        $this->user->user_session_data['userID'],
                        $this->_request['request_data']['id1']
                        );
                break;
            case '3'://params: userID, any integer, any string, any boolean
                $stored_prepared = sprintf(
                        $stored_prepared,
                        $this->user->user_session_data['userID'],
                        $this->_request['request_data']['id1'],
                        $this->_request['request_data']['string1'],
                        $this->_request['request_data']['bool1']
                        );
                break;
            case '4'://params: userID, any integer, any string, any float, any boolean
                $stored_prepared = sprintf(
                        $stored_prepared,
                        $this->user->user_session_data['userID'],
                        $this->_request['request_data']['id1'],
                        $this->_request['request_data']['string1'],
                        $this->_request['request_data']['float1'],
                        $this->_request['request_data']['bool1']
                        );
                break;
            case '5'://params: any string, any float, any boolean, any integer, userID
                $stored_prepared = sprintf(
                        $stored_prepared,
                        $this->_request['request_data']['string1'],
                        $this->_request['request_data']['float1'],
                        $this->_request['request_data']['bool1'],
                        $this->_request['request_data']['id1'],
                        $this->user->user_session_data['userID']
                        );
                break;
            default:
                break;
        }
        $this->_request['request_query_details']['source'] = $stored_prepared;
    }
}
