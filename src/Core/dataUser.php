<?php

use Config\ErrorLog;
use Core\Session;

require_once dirname(__DIR__) . '/Config/autoload.php';

Session::sessionStart('HNPT');
ErrorLog::activateErrorLog();

if ($_SESSION['IPaddress'] != $_SERVER['REMOTE_ADDR'] || $_SESSION['userAgent'] != $_SERVER['HTTP_USER_AGENT']) {
    Session::closeSession();
    exit;
}

if (empty($_POST['name']) || empty($_POST['rol']) || empty($_POST['user']) || empty($_POST['client'])) {
    echo json_encode('vacio');
} else {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['rol'] = $_POST['rol'];
    $_SESSION['user'] = $_POST['user']['username'];
    $_SESSION['user_id']=$_POST['user']['user_id'];
    $_SESSION['client'] = $_POST['client'];
    $_SESSION['nameUser']=$_POST['client']['name'];
    $_SESSION['lastNameUser']=$_POST['client']['lastname'];

    $_SESSION['status'] = true;
    echo json_encode('listo');
}