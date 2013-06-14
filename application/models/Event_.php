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
 * EventConfiguration
 *
 * Retrieve a event configuration.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class Event_configuration extends CI_Model
{
    /**
     * Constructor
     * 
     * @access public
     */
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();       
        // Load encryption class
        $this->load->model('Database_data_handler','db_handler');
        //$this->load->model('Json_data_handler','json_handler');
        //$this->load->model('Xml_data_handler','xml_handler');
        //$this->load->model('Cache_data_handler','cache_handler');
    }
    /**
     * GetEvent
     * 
     * retrieve a event from the DB
     * 
     * @access	public
     * @param	string
     * @return	array
     */
    public function GetEventDetails($action){
        $sql = "CALL USP_RetrieveEventDetails('$action');";
        $result = $this->db->query($sql);
        return $result;
    }
}
