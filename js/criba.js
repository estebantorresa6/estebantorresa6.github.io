Zepto(function($){
    let num = prompt("Ingresa un número mayor o igual a 20");
    let btn2 = $('#m2');
    let btn3 = $('#m3');
    let btn4 = $('#m4');
    let btn5 = $('#m5');
    let btn6 = $('#m6');
    let btn7 = $('#m7');
    let btn8 = $('#m8');
    let btn9 = $('#m9');
    let btnPrimos = $('#primos');
    let btnLimpiar = $('#limpiar');
    let botones = $('.boton');

    if (num<20 || num>50) {
        alert("Oye, no estoy jugando, viejo! >:c");  
        num;
    } else {
        console.log("Entro al else");
        generate();
        console.log("genero btns");  
    }

    function generate(){
        for (let i = 0; i < num; i++) {
            $('#cribaCont').append($('<button>').attr("class","boton").attr("type","button").text(i+1));
        }
    }


    btn2.click(function(e){
        e.preventDefault();
        console.log("clicM2");
    });
    btn3.click(function(e){
        e.preventDefault();
        alert("aqui estoy");
    });
    btn4.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
    btn5.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
    btn6.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
    btn7.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
    btn8.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
    btn9.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
    btnPrimos.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
    btnLimpiar.click(function(e){
        //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
        //document.getElementById().style.background = 'red';
        e.preventDefault();
        alert("aqui estoy");
    });
});

/*
m2.click(function(){
    //document.getElementsByClassName('boton').style.backgroundColor = "lightblue";
    document.getElementById().style.background = 'red';
    console.log("aqui estoy");
});



*/