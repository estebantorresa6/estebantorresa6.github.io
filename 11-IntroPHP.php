<?php
$now = new DateTime("now");
include_once "11-A.php";
?>


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
    <hr>
    <?php
    include "11-B.php"
    ?>
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