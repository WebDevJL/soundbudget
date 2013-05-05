<?php
/**
 * User Model
 * 
 * functions:
 *      - login(string $username, string $password)
 *          * check user to login
 *      - addNewUser(array $params)
 *          * create new user
 *      - deleteUser(string $username, string $password)
 *      - getAllUsers()
 *      - doesDATAFieldExist(string $value,string $type)
 * 
 */
Class User extends CI_Model
{

    //private $encrypt;
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();       
        // Load encryption class
        //$this->load->library('encrypt');
    }
    
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
    function addNewUser($params){
        //$this->load->library('encrypt');// Load encryption class
        //encrypt password with AES256
        $password_encrypted = $this->encrypt->encode($params[password]);
        $sql = "CALL USP_InsertUser($params[uTypeID],'$params[userName]','$params[userEmail]','$password_encrypted')";
        $result = $this->db->query($sql);
        return $result;
    }
    function deleteUser($username, $password){
        
    }
    function getAllUsers(){
        
    }
    //Find out if a username exists already
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
}
?>