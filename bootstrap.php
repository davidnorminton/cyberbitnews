<?php require "router.php";
$root = $_SERVER['DOCUMENT_ROOT'];

$Route = new Route();

$url = $Route->_getApiRoute();
if($Route->hasParams()) {
    include $Route->_getModule() . "/id.php";
} else {
    include $Route->_getModule() . "/index.php";
}
