Zepto(function($){
	const POKEAPI = "https://pokeapi.co/api/v2/pokemon/";

	let cargar = $("#cargar");

	cargar.click(function(){
		let code = $("#code").val();

		$.getJSON(POKEAPI + code, function(data){
			/*;
			console.log(data['name']);
			console.log(data['sprites']['front_shiny_female']);*/

			console.log(data)

			let _name = $("div#descripcion h2");
			let _img = $("div#descripcion img");

			_name.text((data['name']).toUpperCase());
			_img.attr("src", data['sprites']['front_default']);
			_img.attr("alt", data['name']);



			/*	VOLTEAR LA IMAGEN CON SUPERPOSICION DEL CURSOR
				_img.live('hover', function(){
				_img.prop("src", data['sprites']['back_default']);
			});*/
		});	

		/*	OBTENER TODO EL CONTENIDO DE LA UN DOC HTML
		$.get("02-estilos_texto.html", function(data){
			let _practica = $("div#practica");
			_practica.html(data);
		});*/
	});
});