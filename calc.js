;(function() {

	// cm ÷ 100 = m
	// m x 100 = cm

	// tamaño del pliego de tapiz en mts
	var size = {
		width : $('#tw').val() / 100, 
		height : $('#th').val() / 100, 
	};

	var btn = $('#btn-calc');
	var area = 0;
	var count = $('#count');
	var coardDec = $('#card-dec');

	coardDec.hide();

	btn.on('click', function(event){
		event.preventDefault();
		calcArea();
	});

	function calcArea() {
		var client = {
			width : $('#cw').val(),
			height : $('#ch').val()
		};

		if (! (validate(client.width) && validate(client.height))) {
			alert('must be a number consisting of one or more digits');
		}else {
			area = (client.width * client.height) / (size.width * size.height) ;
			// sin redondear
			coardDec.find('input').val(area);
			coardDec.show();

			// redondeado
			//count.val(Math.ceil(area));

			var a = Math.floor(client.width / size.height);
			var b = Math.floor(client.height / size.width);
			console.log(a);
			console.log(b);

			var numero = (a*b) + a + b - 1;
			console.log(numero);
			count.val(numero);
		}
		
		function validate(val) {
			return /^\d+$/.test(val);
		}
	}

})(jQuery || window.jQuery);