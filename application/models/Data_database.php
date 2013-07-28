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
 * Data_retrieval
 *
 * Provides methods to manipulate the data from difference source.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class Data_database extends CI_Model
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
     * Select_database
     * 
     * execute select store procedure and returns the result
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Select_database($storedProcedure){
        error_log($storedProcedure);
        $dbset = $this->db->query($storedProcedure);
        if ($this->db->affected_rows() > 0){
            $this->_data_to_return["result"] = TRUE;
        }else{
            $this->_data_to_return["result"] = FALSE;
        }
        if($dbset -> num_rows() > 0)
        {
            $this->_data_to_return["items"] = $dbset->result();
        }
        $dbset->next_result();
        $dbset->free_result();
        return $this->_data_to_return;
    }
    /**
     * Update_database
     * 
     * execute update store procedure and return row affected
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Update_database($storedProcedure){
        $dbset = $this->db->query($storedProcedure);
        if ($this->db->affected_rows() > 0){
            $this->_data_to_return["result"] = TRUE;
        }else{
            $this->_data_to_return["result"] = FALSE;
        }
        $dbset->next_result();
        $dbset->free_result();
        return $this->_data_to_return;
    }
    /**
     * Insert_database
     * 
     * execute insert store procedure and return last ID
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Insert_database($storedProcedure){
        $dbset = $this->db->query($storedProcedure);
        if ($this->db->affected_rows() > 0){
            $this->_data_to_return["result"] = TRUE;
        }else{
            $this->_data_to_return["result"] = FALSE;
        }
        if($dbset -> num_rows() > 0)
        {
            $this->_data_to_return["items"] = $dbset->result();
        }
        $dbset->next_result();
        $dbset->free_result();
        return $this->_data_to_return;
    }
    /**
     * Delete_database
     * 
     * execute delete store procedure and ...
     * 
     * @access	public
     * @param	array
     * @return	array
     */
    public function Delete_database($storedProcedure){
        $dbset = $this->db->query($storedProcedure);
        $this->_data_to_return["result"] = TRUE;
        $dbset->next_result();
        $dbset->free_result();
        //$dbset->close();
        return $this->_data_to_return;
    }

}
