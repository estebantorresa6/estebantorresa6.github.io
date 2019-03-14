<?php
$now = new DateTime("now");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> <?php echo $now->format("d-m-Y h:i:s"); ?> </title>
</head>
<body>
    <h2>Hobbies</h2>
    <p>Mis hobbies son:</p>
    <ul>
        <?php
        $hobbies = ["Leer", "Dormir", "Comer", "Escuchar Música <3", "Jugar con mi prro uwu"];
        foreach ($hobbies as $hobbie) {
            echo "<li>{$hobbie}</li>";
        }
        ?>
    </ul>
<?php
    /*
    $name = "Esteban";
    if ($name == "Esteban") {
        echo "Hello {$name}<br/>";
    }else {
        echo "Hello World<br/>";
    }

    for ($i=1; $i < 11; $i++) { 
        echo "$i, ";
    }*/
    # ESTO ES UN COMENTARIO

?>

</body>
</html>