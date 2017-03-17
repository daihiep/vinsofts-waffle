$(document).ready(function(){
	var width = $(window).width();
	var height = $(window).height();
	if(width>=992){
		$('.wapper').width(width);
		$('.wapper').height(height);
		
		$(window).resize(function(){
			var new_width = $(window).width();
			var new_height = $(window).height();
			$('.wapper').width(new_width);
			$('.wapper').height(new_height);
		});
	} else{
		$('.ov-flow').removeClass();
		if($('.wapper').height()<700){
			$('.wapper').height(700);
		}
	}			
});