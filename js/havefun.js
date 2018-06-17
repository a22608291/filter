$(document).ready(function() {
	// check
	$('.content-filter li .fa').click(function(event) {
		$(this).parents('.content-filter li').fadeOut(700);
	});

});