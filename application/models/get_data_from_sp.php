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
 * Get DATA from DB Stored procedure
 *
 * Provides methods to retrieve data from database via stored procedures.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */
Class Get_Data_From_SP extends CI_Model
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
    }
    /**
     * callSP
     *  
     * @access	public
     * @param	string
     * @return	array of objects
     */
    function callSP($stored_procedure){
        $data_returned = $this->db->query($stored_procedure);
        $data_formated = $data_returned->result();
        return $data_formated;
    }
}