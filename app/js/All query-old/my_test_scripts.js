$(document).ready(function() {

		var v = false;
		$("button#vegOn").click(function(){

			$f = $(".fish").parent().parent().detach();
			$('.hamburger').replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");

			$("li .meat").after("<li class='tofu'><em>Tofu</em></li>");
				$m = $(".meat").detach();
			$("li.tofu").parent().parent().addClass("veg_leaf");
			if (v == false){
				v = true; }

		});//end button vegOn

		$("button#restoreMe").click(function(){
			if (v == true){
				$(".portobello").replaceWith("<li class='hamburger'>Hamburger</li>");
				$(".menu_entrees li").first().before($f);
					$(".tofu").each(function(i){
					$(this).after($m[i]);
				});//end  each
			$("li.tofu").parent().parent().removeClass("veg_leaf");
				$(".tofu").remove();
				v = false;
			}// enf if
		});//end nutton restoreMe




		// Пишем функция элементы div реагировать на щелчки мышью
			$(".guess_box").click(checkForCode);
		//Функция, генерирующая случайное число
			function getRandom(num){
				var my_num = Math.floor(Math.random()*num);
				return my_num;
			}//end getRandom
		// Именованная функция, скрывающая признак скидки
			var hideCode = function (){
					var numRand = getRandom(4);
					$(".guess_box").each(function(index,value){
						if(numRand == index){
							$(this).append("<span id='has_discount'></span>");
							return false;
						}
					});
				} //end hideCode
			hideCode();//Вызов именованной функции

		// функция проверяет и сообщает размер скидки
			function checkForCode(){
				var discount;
					//Проверяем, содержит ли текущая область код скидки, 
					if($.contains(this, document.getElementById("has_discount")))
					{
					var my_num = getRandom(100);
					//Выбираем выводимое сообщение
					discount =  "<p>Your Code: CODE"+my_num+"</p>" ;
	           		}else{
					discount = "<p>Sory, no discount this time!";
					}
					$(".guess_box").each(function(){
					//Проверяем, содержит ли текущая область код скидки, 					
					if($.contains(this, document.getElementById("has_discount")))
					{
					//визуально изменяем область, чтобы обозначить местонахождение скидки...	
						$(this).addClass("discount");
					}else{
						$(this).addClass("no_discount");
					}
					$(this).unbind();
					});
					$("#result").append(discount);
				}//end checkForCode

		// функция изображения визуально выделялись при наведении 
			$(".guess_box").hover(
				function () {
					// this is the mouseenter event handler
				$(this).addClass("my_hover")
				},
				function() {
					//  this is the mouseleave event handler
				$(this).removeClass("my_hover");
			});	//end hover
	});//end document ready


