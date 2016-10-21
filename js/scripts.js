$(document).ready(function(){

	$(".slide-baner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: false,
		arrows: false,
		draggable: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 20000,
		pauseOnDotsHover: true
	});

	$('.slide-baner .slide-item').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('.Select').SumoSelect();

	var body_ = $('body');
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#navigation');
	$('<span class="fader"/>').appendTo('#navigation');
	$('.open-menu').click(function(){
		body_.toggleClass('menu-opened');
		return false;
	});

	$('.fader').click(function(){
		body_.removeClass('menu-opened');
	});


});
