$(function(){
	// // Прокрутка по якорям
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			mr_top = $(target).offset().top - 70;
		$('body, html').animate({scrollTop: mr_top}, 600);
		return false; 
	});


	// Фиксированое меню
	$('#header').removeClass('default');
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('#header').addClass('default').fadeIn('fast');
		} else {
			$('#header').removeClass('default').fadeIn('fast');
		};
	});

	

	// Табы
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	// Слайдер
	$('.team-list').slick({
		slidesToShow : 4,
		slidesToScroll: 4,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',

	});


});

   


