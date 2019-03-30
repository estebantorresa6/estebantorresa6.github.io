<?php
//print_r(PDO::getAvailableDrivers());

try {
  $dbUser = "admin"; 
  $dbPassword = "1234";
  $db = new PDO("pgsql:host=localhost;dbname=demo;port=5432", $dbUser, $dbPassword);
} catch (PDOException $e){
  echo $e->getMessage();
}

var_dump($db);


//obtener los datos de la tabla usuario
$st = $db->prepare("SELECT * FROM usuario");
$st->setFetchMode(PDO::FETCH_ASSOC); 
$st->execute();
$usuarios = $st->fetchAll(); 
print_r($usuarios);

/*

//insertar un nuevo usuario
if(count($usuarios) == 1) {
  try {
    $st = $db->prepare("INSERT INTO usuarios (nombre, usuario, password) VALUES ('Juan Lopez','jlopez','12345')");
    $st->execute();
  } catch (PDOException $e) {
    echo $e->getMessage();
  }
} else {
  try {
    $st = $db->prepare("UPDATE usuarios SET password = 'abcd' WHERE usuario = 'jlopez'");
    $st->execute();
  } catch (PDOException $e) {
    echo $e->getMessage();
  }
}

//eliminar un usuario
$st = $db->prepare("SELECT COUNT(*) AS cantidad FROM usuarios WHERE usuario = 'jlopez'");
$st->setFetchMode(PDO::FETCH_ASSOC);
$st->execute();
$res = $st->fetch();
$existe = ($res['cantidad'] >= 1) ? true : false;
//if($res['cantidad'] >= 1) { $existe = true; } else { $existe = false; }
if($existe){
  try {
    $st = $db->prepare("DELETE FROM usuarios WHERE usuario = 'jlopez' AND password = 'abcd'");
    $st->execute();
  } catch (PDOException $e) {
    echo $e->getMessage();
  }
}

*/
?>