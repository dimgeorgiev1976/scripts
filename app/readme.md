1. Вклюючвам в Open Sans stylesheet.css
2. Затварям излишните прозорци.




Требования:

1. Сделав нова переменна discount с 20% скидка от обема заказа!
2. Тази перименная есть display: none; докато не кликнат на снимката
   под която е скрита
3. Добавям уникално Id за всеки тег "р", което се показва след натискане
4. Функция с условие If isclickon(), то ....."р", което се показва
   else .....показва се къде е скрита скидката!	

• Скидка должна скрываться только в одном из четырех изображений, и при каждой загрузке страницы изображения должны располагаться в случайном порядке.
• После загрузки страницы посетителю предоставляется только одна возможность найти скидку. 
 -->Следовательно, если первая попытка оказалась неудачной,то дальнейшие щелчки необходимо заблокировать.
• После того как посетитель выбрал изображение и щелкнул на нем, следует сообщить о результате.  
 -->Если изображение было выбрано правильно, нужно вывести величину скидки
• Вместо случайной скидки будет использоваться постоянная скидка 20 %. Таким образом, вместо процента в сообщении следует вывести код скидки.

<!DOCTYPE html>
<html>

<head>
 <title>Jump for Joy</title>
 <link href="styles/styles.css" rel="stylesheet">
</head>

<body>
 <div id="header">
 <h2>Jump for Joy Sale</h2>
 </div>
 <div id="main">
 <div class="guess_box"><img src="images/jump1.jpg"/></div>
 <div class="guess_box"><img src="images/jump2.jpg"/></div>
 <div class="guess_box"><img src="images/jump3.jpg"/></div>
 <div class="guess_box"><img src="images/jump4.jpg"/></div>
 </div>
 <script src="scripts/jquery-1.6.2.min.js "></script>
 <script src="scripts/my_scripts.js"></script>

</body>
<html>
<script>
$(document).ready(function() {
 $(".guess_box").click( function() {
 var my_num = Math.floor((Math.random()*5) + 5);
 var discount = "<p>Your Discount is "+ my_num +"%</p>";
 $(this).append(discount);

 $(".guess_box").each( function(){
 $(this).unbind('click');
	  });
	});
  });
</script>