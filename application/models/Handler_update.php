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
 * Handler_update
 *
 * Provides methods to update the data from difference source.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class Handler_update extends CI_Model
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
        $this->load->model('Data_database','mysql');
    }
    /**
     * Run
     * 
     * retrieve from storage based on source and return result
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    public function Run($request){
        switch ($request['request_query_details']['sourceType']) {
            case "database":
                return $this->mysql->Update_database(
                        $request['request_query_details']['source']);
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
    }
}
