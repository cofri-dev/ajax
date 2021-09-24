<?php

$db = new PDO('mysql:host=127.0.0.1;dbname=ajax_demo;charset=utf8', 'root', '');

extract($_GET);

$page = 'home';

if(isset($p)){
    $page = $p;
}

switch($page){

    case 'home':
        $sth = $db->prepare('select * FROM categories');
        $sth->execute();
        $categories = $sth->fetchAll();

        require 'pages/home.php';
        break;

    default:
        require 'pages/404.php';
        break;  
}