Zepto(function($){

	function calcularCosto(){
		let costo = 0;
		let masas = {
			cl: 50,
			cr: 75,
			li: 45,
		};

		let sizes = {
			t_chico: 50,
			t_mediana: 70,
			t_grande: 90,
		};

		const ppi = 5; //precio por ingrediente
		const ppie = 7; //precio por ingrediente extra

		//OBTENCIÓN DE LOS ELEMENTOS DEL DOM 

		let masa = $("#masa");
		console.log(masa.val());
		let size = $("input[name=tamano]").filter(checked);
		console.log(size);
		let ingredientes = $(".ingrediente").filter(checked);
		console.log(ingredientes);
		let extras = $(".extra").filter(checked);
		let _costo= $("#costo");

		//CALCULO DE LOS COSTOS
		costo += masas[masa.val()];
		console.log(costo);
		costo += sizes[size.attr("id")];
		console.log(costo);
		costo += ingredientes.length*ppi;
		console.log(costo);
		costo += extras.length*ppie;
		console.log(costo);
		_costo.val("$" + costo);
	}

	//ESTO ES DEL EJERCICIO 9

	function enviarFrom() {
		let _form = $("#formPizza"); 
		console.log(_form.serialize());
	}

	//ESTO ES DEL EJERCICIO 9
	

	let btnEnviar = $("#btnEnviar");
	btnEnviar.click(function(e){
		e.preventDefault();
		calcularCosto();
	});
});

let checked =  function () { return this.checked; }
let selected = function () { return this.selected; }