<?php
Class User extends CI_Model
{
    function login($username, $password)
    {
        $this -> db -> select('userID, userName, password');
        $this -> db -> from('tblUsers');
        $this -> db -> where('userName = ' . "'" . $username . "'"); 
        $this -> db -> where('password = ' . "'" . MD5($password) . "'"); 
        $this -> db -> limit(1);

        $query = $this -> db -> get();

        if($query -> num_rows() == 1)
        {
            return $query->result();
        }
        else
        {
            return false;
        }
    }
    function addNewUser($params){
        $sql = "CALL USP_InsertUser($params[uTypeID],'$params[userName]','$params[userEmail]','$params[password]')";
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
            case "username":
                $this -> db -> select('userID');
                $this -> db -> from('tblUsers');
                $this -> db -> where('userName = ' . "'" . $value . "'"); 
                $this -> db -> limit(1);
                break;
            case "email":
                $this -> db -> select('userID');
                $this -> db -> from('tblUsers');
                $this -> db -> where('userEmail = ' . "'" . $value . "'"); 
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