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

    <title><?php echo $conf['appName']; ?></title>
</head>
<body>
    <?php
    if (isset($_SESSION['error'])) {
        echo "<p>{$_SESSION['error']}</p>";
        unset($_SESSION['error']);
    }
    ?>
    <form action="procesaLogin.php" method="POST">
        <div class="container">
        <div class="row">
            <div class="col s12">
                <h5>Iniciar sesion</h5>
            </div>
            <div class="col s12">
                <div class="row">
                <div class="input-field col s4">
                    <input id="user" type="text" class="validate" name="user">
                    <label for="user">Username</label>
                </div>
            </div>
            <div class="col s12">
                <div class="row">
                <div class="input-field col s4">
                    <input id="password" type="password" class="validate" name="password">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="col s12">
                <div class="row">
                <button class="btn waves-effect waves-light" type="submit" name="action">Login
                    <i class="material-icons right"></i>
                </button>
                </div>
            </div>
        </div>
        </div>
    </form>
   
    <script type="text/javascript" src="js/materialize.js"></script>
</body>
</html>