<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth_AddUser extends CI_Controller {

  function __construct()
  {
    parent::__construct();
    $this->load->model('user','',TRUE);
    $this->load->helper('url');
  }

  function index()
  {
    //This method will have the credentials validation
    $this->load->library('form_validation');
    //Array containing the form DATA to be used if validation rules all pass.
    $params = array(
        "uTypeID" => "1",
        "userName" => $this->input->post('userName'),
        "password" => $this->input->post('password'),
        "userEmail" => $this->input->post('userEmail')        
    );
    /*  Set validation rules  */
    //Check userName is unique as last rule
    $this->form_validation->set_rules('userName', 'Username', 'trim|required|xss_clean|callback_checkDB[username]');
    //Check passwords match
    $this->form_validation->set_rules('password', 'Password', 'trim|required|matches[confirm_password]|xss_clean|md5');
    $this->form_validation->set_rules('confirm_password', 'Password Confirmation', 'trim|required|xss_clean');
    //Check email is not already used as last rule
    $this->form_validation->set_rules('userEmail', 'Email', 'trim|required|valid_email|xss_clean|callback_checkDB[email]|callback_createUser');
    
    if($this->form_validation->run() == FALSE)
    {
      //A or more field validation failed.  User redirected to createAccount page
      $this->load->view('auth/createAccount');
    }
    else
    {
        //query the database & login user
        $result = $this->user->login($params['userName'], $params['password']);
        //Login user in session
        // Comment by Jeremie (05-05-13): moved in User Model
//        $sess_array = array();
//        foreach($result as $row)
//        {
//          $sess_array = array(
//            'userID' => $row->userID,
//            'userName' => $row->userName
//          );
//          $this->session->set_userdata('logged_in', $sess_array);
//        }
      //Go to private area
      /*Redirect to pages controller where:
       *    - first param: name of view to load
       *    - second: method used
       *    - redirect type: default=302
       */
        redirect('home', 'view', '301');
    }
    
  }
  
  function checkDB($str,$type)
  {
    //Field validation succeeded.  Validate against database
    //First, query the database
    $result = $this->user->doesDATAFieldExist($str,$type);
    
    //Then, send result to rule
    if(!$result)//Check is good
    {
      return TRUE;
    }
    else//Check failed
    {
        $this->form_validation->set_message('doesDATAFieldExist', 'This %s already in use. Please choose another one. Thank you.');
        return false;
    }
  }
  function createUser(){
        $params = array(
            "uTypeID" => "1",//uTypeID: normal user created via CreateAccount form
            "userName" => $this->input->post('userName'),
            "password" => $this->input->post('password'),
            "userEmail" => $this->input->post('userEmail')        
        );
        return $this->user->addNewUser($params);//return if user was added to DB: TRUE or FALSE
  }
}
?>