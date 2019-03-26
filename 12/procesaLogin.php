<?php
include_once "config.inc.php";
print_r($conf);
//print_r($_POST);

if($conf['user'] == $_POST['user']){
    if ($conf['password'] == $_POST['password']) {
        header("Location:home.php");
        die();
    }
}
$_SESSION['error'] = "Datos de usuario incorrectos";
header("Location:login.php");
?>