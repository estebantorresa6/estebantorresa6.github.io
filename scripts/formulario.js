Zepto(function($){
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
	let size = $("input[name=tamano]").filter(checked);
	console.log(size);

	console.log(masa.val());

	costo += masas[masa.val()];
	console.log(costo);
	costo += sizes[size.attr("id")];
	console.log(costo);
});

let checked =  function () { return this.checked; }
let selected = function () { return this.selected; }