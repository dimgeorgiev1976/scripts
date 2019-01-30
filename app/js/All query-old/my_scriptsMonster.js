$(document).ready(function(){

	var clix = [0,0,0,0]; // head,eyes,nose,mouth
	var w = 367;
	var m = 10;

	var int1, int2, int3;
	
	function runLightning(){
		int1 = setInterval( function() {
					lightning_one();
				}, 	
				4000
			);
		
		int2 = setInterval( function() {
					lightning_two();
				}, 	
				5000
			);
		int3 = setInterval( function() {
					lightning_three();
				}, 	
				7000
			);
	}
	
	function stopMe()
	{
	   window.clearInterval(int1);
	   window.clearInterval(int2);
	   window.clearInterval(int3);

	}
	function lightning_one(){
		$("#container #lightning1").fadeIn(250).fadeOut(250);
	};
	
	function lightning_two(){
		$("#container #lightning2").fadeIn("fast").fadeOut("fast");
	};
	
	function lightning_three(){
		$("#container #lightning3").fadeIn("fast").fadeOut("fast");
	};

	window.onblur = stopMe;
	window.onfocus = runLightning;
	runLightning();


	//Код запуска молний

	$("#head").click( function(){
		moveMe(0, this)
	});//end click function
	
	$("#eyes").click( function(){
		moveMe(1, this)
	} );//end click function
	
	$("#nose").click( function(){
		moveMe(2, this)
	});//end click function
	
	$("#mouth").click( function(){
		moveMe(3, this)
	});//end click function

	function moveMe(i, obj){
		
		if (clix[i] < 9){
			$(obj).animate({left:"-=367px"},500);
			clix[i] = clix[i]+1;
		}else{
			clix[i] = 0;
			$(obj).animate({left:"0px"},500);
		}
	}

		$("#btnRandom").click(randomize);
		$("#btnReset").click(reset);


	function reset(){
		$(".face").each(function(index){
			var move_to = clix[index] * w;
			clix[index] = 0;
			$(this).animate({left:"+="+move_to+"px"},500);
		});
	}
		//Функция, генерирующая случайное число
		function getRandom(num){
		var my_random_num = Math.floor(Math.random()*num);
		return my_random_num;
	}


		function randomize () {
		//Определение случайной позиции для каждой части лица
			$(".face").each(function(index){
		// 
				var target_position = getRandom(m);
		// Переменной текущей позиции присваивается значение 		
				 var current_position = clix[index] ;
		//Обновляем  чтобы пользователь мог продолжать щелкать 
				 clix[index] = target_position;

				 if( target_position > current_position ){
			//Переменной move_to присваивается случайная позиция, 
				 	var move_to = (target_position - current_position) * w;
				 	// анимации перемещения полосы влево
				 	$(this).animate({left:"-="+move_to+"px"},500); 
					 // Здесь что-то делаем!
				}else if(target_position < current_position ){
			//Переменной move_to присваивается случайная позиция, 
					var move_to = (current_position - target_position) * w;
					// анимации перемещения полосы вправо
					$(this).animate({left:"+="+move_to+"px"},500); 
					
					}else{
					 // They are the same - Don't move it.
					}
			}); //End randomize


		};

	
		
		
});//end doc.onready function













// https://resources.oreilly.com/examples/0636920012740/tree/master/ch05/begin/images

