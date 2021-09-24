<?php

header('Content-Type: application/json');

extract($_POST);

if($category == "disabled" || $choice == null) {
    echo json_encode('invalid');
} else {
    echo json_encode('valid');
}

