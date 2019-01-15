
$(document).ready(function(){

		// Пишем функция элементы div реагировать на щелчки мышью

			$(".guess_box").click(checkForCode);

				function checkForCode (){

				var my_num = Math.floor((Math.random()*5) + 5);
				var discount = "<p>Your Discount is :" + my_num + "%</p>";

				$(this).append(discount);

				$(".guess_box").each(function(){

					$(this).unbind('click');
				});

			}//end checkForCode 

		}); //end doc ready

