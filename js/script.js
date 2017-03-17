$(document).ready(function(){
	var width = $(window).width();
	var height = $(window).height();
	$('.resize').width(width);
	$('.resize').height(height);
	$(window).resize(function(){
		var new_width = $(window).width();
		var new_height = $(window).height();
		$('.resize').width(new_width);
		$('.resize').height(new_height);
	});
	
	
});