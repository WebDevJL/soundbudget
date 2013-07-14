<?php

class Pages extends CI_Controller {
    /**
     * Constructor
     * 
     * @access public
     */
    function __construct()
    {
        parent::__construct();
        $this->load->model('User','user');
        $this->user->Load_session_data();
    }
    public function view($page = 'home')
    {
        //if($this->session->userdata('logged_in'))
        if($this->user->is_logged)
        {
          //$session_data = $this->session->userdata('logged_in');
          //$data['userName'] = $session_data['userName'];
          $data['userName'] = $this->user->user_session_data['userName'];
          //$this->load->view('home_view', $data);
          
          
          if ( ! file_exists('application/views/pages/'.$page.'.php'))
            {
                // Whoops, we don't have a page for that!
                show_404();
            }

            $data['title'] = ucfirst($page); // Capitalize the first letter

            $this->load->view('templates/header', $data);
            $this->load->view('templates/app', $data);
            //$this->load->view('pages/'.$page, $data);
            //$this->load->view('templates/leftPanel', $data);
            //$this->load->view('templates/middlePanel', $data);
            //$this->load->view('templates/rightPanel', $data);
            $this->load->view('templates/footer', $data);
        }   
        else
        {
          //If no session, redirect to login page
          //Since the login controller is default, you can put empty string
          redirect('', 'refresh');
        }        
    }
    function logout()
    {
      $this->session->unset_userdata('logged_in');
      session_destroy();
      redirect('', 'refresh');
    }
}