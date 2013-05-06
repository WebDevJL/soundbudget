<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth_AddUser extends CI_Controller {
  //variable used to skip DB call

  private $_skipDBCall = FALSE;
  private $_form_values = array();

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
    //Set HTML markup for form errors
    $this->form_validation->set_error_delimiters('<div class="form_error">', '</div>');
    //Array containing the form DATA to be used if validation rules all pass.
    $this->_form_values = array(
      "uTypeID" => "1",
      "userName" => $this->input->post('userName'),
      "password" => $this->input->post('password'),
      "confirm_password" => $this->input->post('confirm_password'),
      "userEmail" => $this->input->post('userEmail')        
    );
    /*  Set validation rules  */
    //Check userName is unique as last rule
    $this->form_validation->set_rules('userName', 'username', 'trim|required|xss_clean|callback_checkDB[username]');
    //Check passwords match
    $this->form_validation->set_rules('password', 'password', 'trim|required|xss_clean|callback_field_match_custom[password]');
    $this->form_validation->set_rules('confirm_password', 'password confirmation', 'trim|required|xss_clean');
    //Check email is not already used as last rule
    $this->form_validation->set_rules('userEmail', 'email', 'trim|required|valid_email|xss_clean|callback_checkDB[email]|callback_createUser');

    if($this->form_validation->run() == FALSE)
    {
      //A or more field validation failed.  User redirected to createAccount page
      $this->load->view('auth/createAccount');
    }
    else
    {
      // query the database & login user
      // result will be TRUE we have successfully added the user in the DB
      $result = $this->user->login($this->_form_values['userName'], $this->_form_values['password']);
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
  public function field_match_custom($str,$type)
  {
    switch ($type) {
      case "password":
        if($this->_form_values['password'] === $this->_form_values['confirm_password'])
        {
          return TRUE;
        }else{
          $this->_skipDBCall = TRUE;
          $this->form_validation->set_message('field_match_custom','The passwords don\'t match.');
          return FALSE;
        }
        break;
      case "email":
        break;
      default:
        break;
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
      $this->_skipDBCall = TRUE;
      $this->form_validation->set_message('checkDB', 'This %s already in use. Please choose another one. Thank you.');
      return FALSE;
    }
  }
  function createUser()
  {
    if(!$this->_skipDBCall)
    {          
      //return if user was added to DB: TRUE or FALSE

      return $this->user->addNewUser($this->_form_values);
      $this->_skipDBCall = TRUE;
    }else{
      return TRUE;
    }
  }
}
?>