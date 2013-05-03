<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class CreateAccount extends CI_Controller {

  function __construct()
  {
    parent::__construct();
  }

  function index()
  {
    $this->load->helper('form');
    $this->load->view('auth/createAccount');
  }

}

?>