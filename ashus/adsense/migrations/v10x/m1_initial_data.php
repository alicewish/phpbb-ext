<?php
/**
*
* Google AdSense extension for the phpBB Forum Software package.
*
* @copyright (c) 2015 Ashus <https://ashus.ashus.net>
* @license GNU General Public License, version 2 (GPL-2.0)
*
*/

namespace ashus\adsense\migrations\v10x;

/**
* Migration stage 1: Initial data changes to the database
*/
class m1_initial_data extends \phpbb\db\migration\migration
{
	/**
	* Add Google Adsense data to the database.
	*
	* @return array Array of table data
	* @access public
	*/
	public function update_data()
	{
		return array(
			array('config_text.add', array('google_adsense_html', '')),
		);
	}
}
