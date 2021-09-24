<?php

header('Content-Type: application/json');

$db = new PDO('mysql:host=127.0.0.1;dbname=ajax_demo;charset=utf8', 'root', '');

extract($_GET);

$sth = $db->prepare('SELECT * FROM foods WHERE category_id = ?');
$sth->execute([$category_id]);

$foods = $sth->fetchAll(PDO::FETCH_ASSOC); //PDO::FETCH_ASSOC permet d'enlever 0 1 2 3 4 car c'est dupliqué

echo json_encode($foods);