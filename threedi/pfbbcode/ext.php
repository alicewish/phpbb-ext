<?php
/**
 *
 * BBCode Enabled Profile Fields. An extension for the phpBB Forum Software package.
 *
 * @copyright (c) 2017 3Di, javiexin
 * @license GNU General Public License, version 2 (GPL-2.0)
 */

namespace threedi\pfbbcode;

/**
 * BBCode Enabled Profile Fields Extension base
 */
class ext extends \phpbb\extension\base
{
	/**
	 * Check whether the extension can be enabled.
	 * Provides meaningful(s) error message(s) and the back-link on failure.
	 * CLI and 3.1/3.2 compatible (we do not use the $lang object here on purpose)
	 *
	 * @return bool
	 */
	public function is_enableable()
	{
		$is_enableable = true;

		$user = $this->container->get('user');
		$user->add_lang_ext('threedi/pfbbcode', 'ext_require');
		$lang = $user->lang;

		if ( !(phpbb_version_compare(PHPBB_VERSION, '3.2.1', '>=') && phpbb_version_compare(PHPBB_VERSION, '3.3.0@dev', '<')) )
		{
			$lang['EXTENSION_NOT_ENABLEABLE'] .= '<br>' . $user->lang('PFBBCODE_ERROR_321_VERSION');
			$is_enableable = false;
		}

		$user->lang = $lang;

		return $is_enableable;
	}
}
