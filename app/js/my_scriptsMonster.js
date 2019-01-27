$(document).ready(function(){

		var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

		// вызываются функции,выделенные жирным шрифтом в конце
	   	 lightning_one(4000);
  		 lightning_two(100000);
		 lightning_three(17000);

	$("#head").click(function(){
		// Условие ограничивает пользователя девятью 
		if (headclix < 9) {	
			$(this).animate({left:"-=367px"},500);
			headclix += 1;
		} else {
			$(this).animate({left:"0px"},500);
			headclix = 0;	}
	});// end click	




	$("#eyes").click(function(){
			if (eyeclix < 9) {
				$(this).animate({left:"-=367px"},500)
					eyeclix += 1;
			} else {
				$(this).animate({left:"0px"},500);
			eyeclix = 0; 
			}
		});// end click
 	$("#nose").click(function(){
			// Условие ограничивает пользователя девятью 
			if (noseclix < 9) {
				$(this).animate({left:"-=367px"},500);
				noseclix += 1;
			} else {
				$(this).animate({left:"0px"},500);			
			noseclix = 0; }
		});// end click

	$("#mouth").click(function(){
		if (mouthclix < 9) { 
			$(this).animate({left:"-=367px"},500);
			mouthclix += 1;
		} else {
			$(this).animate({left:"0px"},500);
			mouthclix = 0;	}
	});// end click
});//end doc.onready function

		// Определения функций сверкания молний
		function lightning_one(){

		$("#container #lightning1").fadeIn(250).fadeOut(250);
		setTimeout("lightning_one()",3000);
		};// end of lightning_one

		// lightning_two
		function lightning_two(){
			$("#container #lightning2").fadeIn("fast").fadeOut("fast");
			setTimeout("lightning_two()",10000);
		};// end of lightning_two


		// lightning_three
		function lightning_three(){
			$("#container #lightning3").fadeIn("fast").fadeOut("fast");
			setTimeout("lightning_two()",5000);
		};// end of lightning_three

// https://resources.oreilly.com/examples/0636920012740/tree/master/ch05/begin/images

