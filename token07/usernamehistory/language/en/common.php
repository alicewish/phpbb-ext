<?php

/**
*
* @package phpBB Extension - Username History
* @copyright (c) 2016 Token07
* @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
*
*/

if (!defined('IN_PHPBB'))
{
	exit;
}

if (empty($lang) || !is_array($lang))
{
	$lang = array();
}

$lang = array_merge($lang, array(
	'USERNAMEHISTORY_USERNAME_PREVIOUS'	=> 'Previous Usernames',
));
