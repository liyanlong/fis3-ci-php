<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'third_party/Baidu/Resource.class.php';

/**
 *
 */
class FIS_Resource
{

    function __construct()
    {
        Baidu_FIS_Resource::setConfig(array(
            'config_dir'    => APPPATH . '/config/',
            'template_dir'  => APPPATH . '/tpl/'
        ));
    }
}
