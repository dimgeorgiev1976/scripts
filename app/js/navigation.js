$(document).ready(function(){

	    // Создаем переменые для кнопки и для меню
		var navToggleButton = $("#header__button");
		var navToggleIcon = $("#header__button .fa");
		var navBlock = $(".header__list");
		var navBlockOpen = "header__list--open";
		var navlink = $(".header__list a");
		var iconNav = 'fa-bars';
		var iconClose = 'fa-times';
		
	// Мобильная навигация
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);

		if ( navToggleIcon.hasClass(iconNav) ){
			navToggleIcon.removeClass(iconNav);
			navToggleIcon.addClass(iconClose);
		} else {
			navToggleIcon.removeClass(iconClose);
			navToggleIcon.addClass(iconNav);
		}
	})
	navLink.on('click', function(){

		if ( navBlock.hasClass(navBlockOpen) ) {
			if ( navToggleIcon.hasClass(iconNav) ){
				navToggleIcon.removeClass(iconNav);
				navToggleIcon.addClass(iconClose);
			} else {
				navToggleIcon.removeClass(iconClose);
				navToggleIcon.addClass(iconNav);
			}
		}
			navBlock.removeClass(navBlockOpen);
	})
	
});