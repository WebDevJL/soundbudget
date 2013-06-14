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
 * Print JSON
 *
 * print out the JSON object passed to page.
 *
 * @package		SoundBudget
 * @subpackage          Views
 * @category            View
 * @author		Jeremie Litzler
 */
//echo 'json_data page';
echo json_encode($data);
?>