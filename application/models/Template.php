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
 * TemplateModel
 *
 * Template.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class TemplateModel extends CI_Model
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
        //$this->load->library('encrypt');
    }
    /**
     * Init
     * 
     * init method
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Init($params){
        
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
    public function MethodTemplate($params){
        
    }
}
