<?php
include_once "config.inc.php";
$isStarted = (isset($_SESSION['logged'])) ? true : false;
if ($isStarted) {
    header("Location:home.php");
}else {
    header("Location:login.php");
}
?>