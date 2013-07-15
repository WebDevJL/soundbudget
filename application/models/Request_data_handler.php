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
 * Left_data_handler
 *
 * Provide methods to retrieve data from a MySQL database.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class Request_data_handler extends CI_Model
{
    private $_action = "";
    private $_event_details = "";
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
    public function Init($action){
        $this->_action = $action;
        $this->_event_details = $this->event_config->Get_source_for_action($this->_action);
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
    public function Retrieve_data($action, $data){
        if($this->user->is_logged )
        {
            switch ($action) {
                case 'init_1':
                    $query = sprintf(
                            $this->_event_details['source'],
                            $this->user->user_session_data['userID']
                            );
                    break;
                case 'init_2':
                    $query = sprintf(
                            $this->_event_details['source'],
                            $this->user->user_session_data['userID']
                            );
                    break;
                case 'mp_4-2':
                    $query = sprintf(
                            $this->_event_details['source'],
                            $this->user->user_session_data['userID'],
                            $data['accountID']
                            );
                    break;
                default:
                    break;
            }
            error_log($action);
            $this->_data_to_return['items'] = $this->mdh->Retrieve_data($this->_event_details['sourceType'],$query);
            //$this->_data_to_return['error'] ='not data found';
            if(sizeof($this->_data_to_return) <= 0) $this->_data_to_return['error'] ='no data';
        }else{
            $this->_data_to_return['error'] ='access denied';
        }
        return $this->_data_to_return;
    }
}
