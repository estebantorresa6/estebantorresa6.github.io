<?php
print_r(PDO::getAvailableDrivers());

try {
  $dbUser = "admin"; 
  $dbPassword = "1234";
  $db = new PDO("pgsql:host=127.0.0.1;dbname=demo;port=5432;user=admin;password=1234");
} catch (PDOException $e){
  echo $e->getMessage();
}

/*
//insertar un nuevo usuario
if(count($usuarios) == 1) {
  try {
    $st = $db->prepare("INSERT INTO usuario (id, nombre, password, nom_usr) VALUES (2,'Juan Lopez','12345','jlopez')");
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


//obtener los datos de la tabla usuario
$st = $db->prepare("SELECT * FROM usuario");
$st->setFetchMode(PDO::FETCH_ASSOC); 
$st->execute();
$usuarios = $st->fetchAll(); 
print_r($usuarios);




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



class db {
  private $db;
  function DB($user,$password,$dbName,$host="localhost",
  $driver = null, $port = null){
    $driver = (is_null($driver)) ? "pgsql" : $driver;
    $port = (is_null($port)) ? "5432" : $port;
    try{
      $this->$db = new PDO("$driver:host=$host;dbname=$dbName;port=$port",$user,$password);
    }
    catch (PDOException $e){
      echo $e->getMessage();
      die();
    }
  }

  public function select($table, $columns = "*", $where = "where 1"){
    $st = $db->prepare("SELECT * FROM usuario");
    $st->setFetchMode(PDO::FETCH_ASSOC); 
    $st->execute();
    return $st->fetchAll(); 
    //print_r($usuarios);
  }
}
*/

?>