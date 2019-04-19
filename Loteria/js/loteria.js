
var maxField = 4; 
var addButton = $('#btn-agregar'); 
var wrapper = $('#formulario'); 
var fieldHTML = ('<div class="input-field col s10"><i class="material-icons prefix">account_circle</i><input id="j1" type="text" class="validate"><label for="j1">Jugador</label></div><div class="col s2" class="eraser"><a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">remove</i></a></div>');
var x = 1; 

$("#btn-agregar").click(function(){ 
    if(x < maxField){ 
        x++; 
        $(wrapper).append(fieldHTML); 
        console.log(x);
    }
});
$(wrapper).on('click', '.eraser', function(e){ 
    //e.preventDefault();
    //$(this).parent('div').remove(); 
    //x--; 
    console.log("clic");
});
   
