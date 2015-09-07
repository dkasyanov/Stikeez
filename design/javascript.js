$(document).ready(function($) {
	$('.sign').click(function(){
		$('.toggle').slideToggle("300");
	})
	
	$('.arrow-down, .arrow-up').click(function(){
		$('.toggle').slideToggle("300");
		$('.arrow-toggle').toggle();
	})
});