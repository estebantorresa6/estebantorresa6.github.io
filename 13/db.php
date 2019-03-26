<?php
print_r(PDO::getAvailableDrivers());

try {
    $dbUser = "admin"; 
    $dbPassword = "12345"; 
    $db = new PDO("pgsql:host=localhost;dbname=demo;port=5432", $dbUser, $dbPassword);
  } catch (PDOException $e){
    echo $e->getMessage();
  }
?>