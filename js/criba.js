Zepto(function($){
    let _num = prompt("Ingresa un número mayor o igual a 20");
    let num = parseInt(_num);
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
    let ids = document.getElementsByClassName("boton");
    let ids_array = [];
    let mult = [];

    //CONDICION INICIAL
    if (num<20) {
        alert("MAYOR DE 20, DIJE >:c");  
    } else {
        generate();
        extraerID();     
    }


    function extraerID(){
        for (let i = 0; i < ids.length; i++) {
            ids_array.push(parseInt(ids[i].id));
        }
    }

    function generate(){
        for (let i = 0; i < num; i++) {
            $('#cribaCont').append($('<button>').attr("class","boton").attr("type","button").attr("id",i+1).text(i+1));
        }
    }

    //ACCIONES DE LOS BOTONES
    btn2.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_2[i]-1]).css("background-color","red");
        }
    });
    btn3.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_3[i]-1]).css("background-color","blue");
        }
    });
    btn4.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_4[i]-1]).css("background-color","pink");
        }
    });
    btn5.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_5[i]-1]).css("background-color","yellow");
        }
    });
    btn6.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_6[i]-1]).css("background-color","aquamarine");
        }
    });
    btn7.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_7[i]-1]).css("background-color","green");
        }
    });
    btn8.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_8[i]-1]).css("background-color","brown");
        }
    });
    btn9.click(function(e){
        e.preventDefault();
        for (let i = 0; i < stop; i++) {
            $(ids[multiples_9[i]-1]).css("background-color","orange");
        }
    });
    btnPrimos.click(function(e){
    for (let i = 0; i < ids.length; i++) {
        e.preventDefault();
       $(ids[numerosPrimos[i]-1]).css("background-color","blueviolet");
    }
    });
    btnLimpiar.click(function(e){
        e.preventDefault();
        $('.boton').css("background-color","transparent");
    });


    //CALCULAR NUMEROS PRIMOS
    var c = num;
    var j = 2;
    var numerosPrimos = [];

    for (; j < c; j++) {
        if (primo(j)) {
            numerosPrimos.push(j);
        }
    }

    function primo(numero) {
    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
        return false;
        }
    }
    return numero !== 1;
    }
    //FIN NUMEROS PRIMOS
    

    // Arrays que contendran los valores multiples del 3 y del 5
    var multiples_2=[];
    var multiples_3=[];
    var multiples_4=[];
    var multiples_5=[];
    var multiples_6=[];
    var multiples_7=[];
    var multiples_8=[];
    var multiples_9=[];

    let stop = num;
    //CALCULAR MULTIPLOS
    function multiple(valor, multiple)
        {
            resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
        }
 
        
 
        // bucle del 1 al 100
        for(var i=1;i<=stop;i++)
        {
            if(multiple(i,2))
                multiples_2.push(i);
            if(multiple(i,3))
                multiples_3.push(i);
            if(multiple(i,4))
                multiples_4.push(i);
            if(multiple(i,5))
                multiples_5.push(i);
            if(multiple(i,6))
                multiples_6.push(i);
            if(multiple(i,7))
                multiples_7.push(i);
            if(multiple(i,8))
                multiples_8.push(i);
            if(multiple(i,9))
                multiples_9.push(i);
        }
    
});
