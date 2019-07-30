<?php require "router.php";
$root = $_SERVER['DOCUMENT_ROOT'];

$Route = new Route();

$url = $Route->_getApiRoute();
if($Route->hasParams()) {
    if(file_exists('pages/' . $Route->_getModule() . "/id.php")) {
        include 'pages/' . $Route->_getModule() . "/id.php";
    }  else {
        if(file_exists('pages/' . $Route->_getModule() . "/index.php")) {
           include 'pages/' . $Route->_getModule() . "/index.php";
        } else {
           include "404.php";
        }
    }  
} else {
    if(file_exists('pages/' .$Route->_getModule() . "/index.php")) {
        include 'pages/' . $Route->_getModule() . "/index.php";
    } else {
        include "404.php";
    }    
}
