$(document).ready(function() {
	console.log("here we go ");

	$("#myWork").css('display', 'none');
	$("#contact").css('display', 'none');
	$("#homeNav").addClass('active');
	// $("#home #myWork #contact").addClass('animated');

	$("#homeNav").click(function() {

		$("#home").css('display', 'block');
		$("#myWork").css('display', 'none');
		$("#contact").css('display', 'none');

		$("#myWork").removeClass('flipInY');
		$("#home").addClass('flipInY');
		$("#contact").removeClass('flipInY');
		
		$("#homeNav").addClass('active');
		$("#workNav").removeClass('active');
		$("#contactNav").removeClass('active');
	});


	$("#workNav").click(function() {

		$("#home").css('display', 'none');
		$("#myWork").css('display', 'block');
		$("#contact").css('display', 'none');


		$('#myWork').addClass('flipInY');
		$("#home").removeClass('flipInY');
		$("#contact").removeClass('flipInY');


		$("#workNav").addClass('active');
		$("#homeNav").removeClass('active');
		$("#contactNav").removeClass('active');
		
	});

	$("#contactNav").click(function() {

		$("#home").css('display', 'none');
		$("#myWork").css('display', 'none');
		$("#contact").css('display', 'block');


		$("#myWork").removeClass('flipInY');
		$("#home").removeClass('flipInY');
		$("#contact").addClass('flipInY');

		$("#contactNav").addClass('active');
		$("#homeNav").removeClass('active');
		$("#workNav").removeClass('active');
		
	});

	// $(".email").mouseenter(function() {
	// 	$(".bubble").css('opacity', '1');
	// });

	// $(".email").mouseleave(function() {
	// 	$(".bubble").css('opacity', '0');
	// });

	
});