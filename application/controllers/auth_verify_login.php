<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth_Verify_Login extends CI_Controller {

  function __construct()
  {
    parent::__construct();
    $this->load->model('user','',TRUE);
    $this->load->helper('url');
  }

  function index()
  {
    //This method will have the credentials validation
    //Commented by Jeremie (08-05-13): moved in config/autoload.php
    //$this->load->library('form_validation');

    //Set HTML markup for form errors
    $this->form_validation->set_error_delimiters('<div class="form_error">', '</div>');

    $this->form_validation->set_rules('userName', 'Username', 'trim|required|xss_clean');
    $this->form_validation->set_rules('password', 'Password', 'trim|required|xss_clean|callback_check_db');
	
    if($this->form_validation->run() == FALSE)
    {
      //Field validation failed.  User redirected to login page
      $this->load->view('auth/login');
    }
    else
    {
      //Go to private area
      /*Redirect to pages controller where:
       *    - first param: name of view to load
       *    - second: method used
       *    - redirect type: default=302
       */
      redirect('home', 'view', '301');
    }
    
  }
  
  function check_db($password)
  {
    //Field validation succeeded.  Validate against database
    $username = $this->input->post('userName');
    
    //query the database
    $result = $this->user->login($username, $password);
    
    if($result)
    {
        // Comment by Jeremie (05-05-13): moved in User Model
//      $sess_array = array();
//      foreach($result as $row)
//      {
//        $sess_array = array(
//          'userID' => $row->userID,
//          'userName' => $row->userName
//        );
//        $this->session->set_userdata('logged_in', $sess_array);
//      }
      return TRUE;
    }
    else
    {
      $this->form_validation->set_message('check_db', 'Invalid username or password');
      return false;
    }
  }
}
?>