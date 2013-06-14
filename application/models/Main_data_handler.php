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
 * MainDataHandler
 *
 * Provides methods to manipulate the data from difference source.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class Main_data_handler extends CI_Model
{
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
    }
    /**
     * Retrieve_data
     * 
     * retrive from storage based on source and return result
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Retrieve_data($source,$query){
        error_log($source);
        switch ($source) {
            case "database":
                $dbset = $this->db->query($query);
                if($dbset -> num_rows() > 0)
                {
                    $this->_data_to_return = $dbset->result();
                }
                break;
            case "json":


                break;
            case "xml":


                break;
            case "cache":


                break;

            default:
                break;
        }
        $dbset->next_result();
        $dbset->free_result();
        return $this->_data_to_return;
    }
    /**
     * Remove
     * 
     * remove from storage based on source and return result
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Remove($source){
        
    }
    /**
     * Update
     * 
     * update storage based on source and return result
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Update($source){
        
    }
    /**
     * Retrieve
     * 
     * get data from storage based on source and return result
     * 
     * @access	public
     * @param	array
     * @return	array
     */
    public function Retrieve($source){
        
    }

}
