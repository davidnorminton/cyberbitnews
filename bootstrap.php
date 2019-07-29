<?php require "router.php";
$root = $_SERVER['DOCUMENT_ROOT'];

$Route = new Route();

$url = $Route->_getApiRoute();

include $Route->_getModule() . "/index.php";
