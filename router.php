<?php

class Route {

    private $url; 
    private $splitUrl = [];
    private $default = 'latest';
    private $module;
    private $params;
    private $api = "https://api.cyberbitnews.com/";

    public function __construct() 
    {
        $this->url = $_SERVER['REQUEST_URI'];
        $this->splitUrl = explode('/', $this->url);
        array_shift($this->splitUrl);
        
        if (!$this->splitUrl[0]) {
            $this->module = $this->default;
        } else {
            $this->module = $this->splitUrl[0]; 
        }
    }

    public function _getUrl()
    {
        return $this->url;
    }

    public function _getModule()
    {
        return $this->module;
    }

    public function hasParams()
    {
        return $this->splitUrl > 1 ? true : false; 
    }
   
    public function _getSplitUrl()
    {
        return $this->splitUrl;
    }

    public function _getApiRoute()
    {
        if(!$this->hasParams()) {
            return $this->api . $this->Module . '.php';
        } else {
            return $this->api . $this->module . '.php' . '?id=' . $this->splitUrl[1]; 
        }    
    }
    
}