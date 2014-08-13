$( document ).ready( function() {
	console.log("loaded");

	$(".play, .modal-background, .modal-close").click(function(){

		$(".modal-container").fadeToggle();

	});

	//this controls that header/ navigation bar

	$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
		$( "header" ).css({opacity: '0.5'});

		$( "header" ).mouseleave(function() {
			$( "header" ).css({opacity: '0.5'});
		});
		} else {
			$( "header" ).css({opacity: '1'});
		}
	});

	$( "header" ).mouseover(function() {
			$( "header" ).css({opacity: '1'});
	});



	$("p").css({
		opacity: '0'
	});

	//reduce section begin

	$(".commonThreadsLogo").css({
		left: -1000,
		opacity: 0,
	});



	$(" #reduce ").waypoint(function() {
		console.log("it worked");
		$(" #reduce p ").css({
			opacity: '1'
		});

		$(".commonThreadsLogo").animate({
			easing: "easeOutBounce",
			left: "250px",
			opacity: 1}, 1000);

	});

	//reduce section end

	//repair section begin

	$(".repairImg").css({
		left: '-1000px',
		opacity: '0',
		width: "100%"
	});

	$(" #repair ").waypoint(function() {
		$("	#repair p ").css({
			opacity: '1'
		});


		$(".repairImg").animate({
			left: "75px",
			opacity: '1'
			}, 1000);

	});

	//end repair section 

	//begin reuse section 

	$(".wornWearLogo").css({
		right: -230,
		opacity: 0
	});

	$(" #reuse ").waypoint(function() {
		$(" #reuse p ").css({
			opacity: '1'
		});

		$(".wornWearLogo").animate({
			right: 250,
			opacity: 1
		}, 1000);
		
	});

	//recycle section

	$(" #recycle ").waypoint(function() {
		$(" #recycle p ").css({
			opacity: '1'
		});

	});

	$(" #reimagine ").waypoint(function() {
		$(" #reimagine p ").css({
			opacity: '1'
		});
	});

	//animate scrolling to feature

	$("#partnershipButton").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#partnership").offset().top
		}, 700);
	});

	$("#reduceButton").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#reduce").offset().top
		}, 700);
	});

	$("#repairButton").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#repair").offset().top
		}, 700);
	});

	$("#wornWearButton").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#wornWearVideo").offset().top
		}, 700);
	});

	$("#reuseButton").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#reuse").offset().top
		}, 700);
	});

	$("#recycleButton").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#recycle").offset().top
		}, 700);
	});

	$("#reimagineButton").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#reimagine").offset().top
		}, 700);
	});

	$(".modal-fade2").click(function(){
		$(".modal-container2").slideToggle();
	});

});