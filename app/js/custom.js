	$(document).ready(function(){

	// Функция как да променя елементи с помощта на javascript

    function show() {
      document.getElementById("owl-one").style.setProperty('display', 'block', 'important');

      window.onresize = function() {
      if (window.innerWidth >= 768) {
        document.getElementById("owl-one").style.display = 'none';
      }  else
      document.getElementById("owl-one").style.display = 'block';
        }
      }


    $('#carousel').data('owl.carousel').destroy(); 

    });

  // Функция для заменять карусель 
       var Toggletwo = $('.owl-carousel .owl-one ');
   Toggletwo.owlCarousel();
   // Go to the next item
   $('.customNextBtn').click(function() {
       owl.trigger('replace.owl.carousel');
   });

        //Функция для изменение элементов 

        $(window).on('resize', function(){
        var win = $(this);
       if (win.width() > 1199 ) { 
        $('#mobile-only').addClass('justify-content-center');
        } else {
         $('#mobile-only').removeClass('justify-content-center');
          }
       });

