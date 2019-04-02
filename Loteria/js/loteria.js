$(document).ready(function(){
    var maxField = 4; //Input fields increment limitation
    var addButton = $('#btn-agregar'); //Add button selector
    var wrapper = $('.container'); //Input field wrapper
    var fieldHTML = $('#formulario');
    //<div><input type="text" name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button" title="Remove field"><img src="remove-icon.png"/></a></div>
    var x = 1; //Initial field counter is 1
    $(addButton).click(function(){ //Once add button is clicked
        if(x < maxField){ //Check maximum number of input fields
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); // Add field html
        }
    });
    $(wrapper).on('click', '.remove_button', function(e){ //Once remove button is clicked
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});

function agregar(){
    var maximo = 4;
    var btnAgregar = $('#btn-agregar');
    var contenedor = $('body');
    var rellenar = $('#formulario');
    var x=1;
    $(btnAgregar).click(function(){
        if(x<maximo){
            x++;
            $(contenedor).append(rellenar);
        }
    });
}