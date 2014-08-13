$( document ).ready( function() {

	$("#sticker").sticky({topSpacing:0});

//scrolling navigation

	$("#workNav").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#work").offset().top
		}, 700);
	});

	$("#newsNav").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#news").offset().top
		}, 700);
	});

	$("#blogNav").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#blog").offset().top
		}, 700);
	});

	$("#aboutNav").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 700);
	});

	$("#networkNav").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#network").offset().top
		}, 700);
	});

	$("#contactNav").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 700);
	});

	$("#topNav").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 700);
	});


//active state on nav bar while scrolling 


	var sections = $('section');
	var nav = $('nav');
	var nav_height = nav.outerHeight();
	 
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
	 
			sections.each(function() {
				var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();
		 
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('li a').removeClass('txt-color-active');
				sections.removeClass('txt-color-active');

				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('txt-color-active');
			}
		});
	});










});