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
 * User Model
 *
 * Provides methods to manipulate the User data (retrieve, store) from
 * difference source.
 *
 * @package		SoundBudget
 * @subpackage          Models
 * @category            Model
 * @author		Jeremie Litzler
 */

Class User extends CI_Model
{
    public $is_logged = FALSE;
    public $user_session_data = array();
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
     * login
     * 
     * - look in the DB for the user details
     * - if there is a result found, compare the password given against the
     *   decrypted password from the db. If they match, then login the user by
     *   storing his info in the session and return true.
     * - in any other case, return false.
     * 
     * @access	public
     * @param	string
     * @param	string
     * @return	bool
     */
    function login($username, $password)
    {
        //build query to check user
        $this -> db -> select('userID, userName, password');
        $this -> db -> from('tblUsers');
        $this -> db -> where('userName = ' . "'" . $username . "'"); 
        //$this -> db -> where('password = ' . "'" . $password_encrypted . "'");
        $this -> db -> where('active = 1');
        $this -> db -> limit(1);
        //run query
        $query = $this -> db -> get();
        //if result found, return it
        if($query -> num_rows() == 1)
        {
            $result = $query->result();
            foreach($result as $row)
            {   
                $db_password = $row->password;
                /* @var $decrpyted string */
                $decrypted = $this->encrypt->decode($db_password);
                if($decrypted===$password){
                    //if passwords match, store user in session
                    $sess_array = array(
                        'user_logged' => TRUE,
                        'userID' => $row->userID,
                        'userName' => $row->userName
                    );
                    $this->session->set_userdata('logged_in', $sess_array);

                    return $result;
                }else{//if passwords don't match
                  return false;
                }       
            }
        }
        //otherwise, return false
        else
        {
            return false;
        }
    }
    /**
     * addUser
     * 
     * - encrypt password
     * - call stored procedure to add user in the DB
     * - return result of DB insert.
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    function addNewUser($params){
        //$this->load->library('encrypt');// Load encryption class
        //encrypt password with AES256
        $password_encrypted = $this->encrypt->encode($params[password]);
        $sql = "CALL USP_InsertUser($params[uTypeID],'$params[userName]','$params[userEmail]','$password_encrypted')";
        $result = $this->db->query($sql);
        return $result;
    }
    /**
     * deleteUser
     * 
     * - 
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    function deleteUser($username, $password){
        
    }
    /**
     * getAllUsers
     * 
     * - 
     * 
     * @access	public
     * @param	array
     * @return	bool
     */
    function getAllUsers(){
        
    }
    /**
     * doesDATAFieldExist
     * 
     * - check if the username is already used by an existing user
     * - check if the email is already used by an existing user
     *  
     * @access	public
     * @param	string
     * @param	string
     * @return	bool
     */
    function doesDATAFieldExist($value,$type){
        switch ($type){
            case "username"://check username
                $this -> db -> select('userID');
                $this -> db -> from('tblUsers');
                $this -> db -> where('userName = ' . "'" . $value . "'");
                $this -> db -> where('active = 1');
                $this -> db -> limit(1);
                break;
            case "email"://check email
                $this -> db -> select('userID');
                $this -> db -> from('tblUsers');
                $this -> db -> where('userEmail = ' . "'" . $value . "'");
                $this -> db -> where('active = 1');
                $this -> db -> limit(1);
                break;
            default:
                return true;
        }

        $query = $this -> db -> get();

        if($query -> num_rows() > 0)
        {
            return true;//DATA already exists
        }
        else
        {
            return false;//DATA is free to use!
        }
    }
    /**
     * Load_session_data 
     * 
     * @access	public
     * @param	void
     * @return	array
     */
    function Load_session_data(){
        if($this->session->userdata('logged_in'))
        {
            $this->user_session_data = $this->session->userdata('logged_in');
            $this->is_logged = TRUE;
        }
        return $this->user_session_data;
    }
}
?>