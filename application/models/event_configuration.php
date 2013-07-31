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
    private $_event_source = array();
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
        //$this->load->model('Database_data_handler','db_handler');
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
    public function Get_query_details_for_action($action){
        $sql = "CALL USP_RetrieveEventDetails('$action');";
        error_log($sql);
        $dbset = $this->db->query($sql);
        if ($dbset->num_rows() > 0){
            $results = $dbset->result();
            foreach($results as $row){
                $this->_event_source['eventID'] = $row->eventID;
                $this->_event_source['sourceType'] = $row->sourceType;
                $this->_event_source['source'] = $row->source;
                $this->_event_source['paramID'] = $row->paramID;
            }
            $dbset->next_result();
            $dbset->free_result();
            //$dbset->close();
            return $this->_event_source;
        }
    }
}
