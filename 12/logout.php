<?php
include_once "config.inc.php";
unset($_SESSION['logged']);
header("Location:index.php");
?>