$(document).ready(function() {
	// check
	$('.checkbox').click(function(event) {
		$(this).toggleClass('active').children('.fa-check').toggleClass('active');
		$(this).parent().find('p').toggleClass('active');

	});
	// star
	$('.fa-star').click(function(event) {
		$(this).toggleClass('active');
		$(this).parents('.task').toggleClass('active');

	});
	$("img[src$='.calendar']").addClass('fa fa-calendar');
	$("img[src$='.file']").addClass('fa fa-file-o');
	$("img[src$='.commenting']").addClass('fa fa-commenting-o');
	$("img[src$='.cross']").addClass('fa fa-times');
	$("img[src$='.plus']").addClass('fa fa-plus');

	//隱藏task-content
	$('.fa-pencil').click(function(event) {
		$(this).parents('.task').children('.task-content').slideToggle(1000);
	});
	$('.list-button').click(function(event) {
		$('.task-content').slideUp(0);
	});
});