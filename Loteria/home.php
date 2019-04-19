<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
    <link rel="stylesheet" href="css/loteria.css">
    <title>Loteria Mexicana</title>
</head>
<body>
    <nav class="blue darken-2">
        <a href="#" class="brand-logo center">Juego de Loter&iacute;a</a>
    </nav>
    <div class="container">
        <div class="row">
            <h4>Registro jugador</h4>
            <form class="col s6">
                <div class="row" id="formulario">
                    <div id="inputF" class="input-field col s12">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="j1" type="text" class="validate">
                        <label for="j1">Jugador</label>
                    </div>
                </div>
            </form></br>
        </div>
        <div class="row">
            <div class="col s12 offset-s2">
                <a id="btn-agregar" class="waves-effect waves-light btn"><i class="material-icons left">add</i>nuevo jugador</a>
            </div>
        </div>
        
    </div>
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.js"></script>
    <script type="text/javascript" src="js/loteria.js"></script>
</body>
</html>