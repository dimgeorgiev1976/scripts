$(document).ready(function(){

		var headclix = 0,eyesclix = 0,noseclix = 0,mouthclix = 0;

	$("#head").click(function(){
		// Условие ограничивает пользователя девятью 
		if (headclix < 9) {
		// Здесь будет размещаться код анимации.

			headclix += 1;
		} else {
		// Здесь будет размещаться код «перемотки» полосы изображений
			

			headclix = 0;
		}
	});// end click	

	$("#eyes").click(function(){
			// Условие ограничивает пользователя девятью 
			if (eyesclix < 9) {
			// Здесь будет размещаться код анимации.

				eyesclix += 1;
			} else {
			// Здесь будет размещаться код «перемотки» полосы изображений
				

				eyesclix = 0;
			}
		});// end click

	$("#nose").click(function(){
			// Условие ограничивает пользователя девятью 
			if (noseclix < 9) {
			// Здесь будет размещаться код анимации.

				noseclix += 1;
			} else {
			// Здесь будет размещаться код «перемотки» полосы изображений
				

				noseclix = 0;
			}
		});// end click

	$("#mouth").click(function(){
		// Условие ограничивает пользователя девятью 
		if (mouthclix < 9) {
		// Здесь будет размещаться код анимации.

			mouthclix += 1;
		} else {
		// Здесь будет размещаться код «перемотки» полосы изображений
			

			mouthclix = 0;
		}
	});// end click


		function lightning_one(t){

		$("#lightning1").fadeIn("250").fadeOut("250");
		setTimeout("lightning_one(), t");
		};

});// end ready document