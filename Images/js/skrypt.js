$(function(){
	
	$('img').wrap('<div class="overflow">');
	$('.overflow').prepend('<div class="green"></div>');
	// $('.overflow').prepend('<button class="see">See oryginal image</button>');
	$('.overflow').each(function(index){
		var i = index+1;
		$(this).prepend('<a class="see" id="open'+i+'" href="img/o'+i+'.JPG" target="blank">See oryginal image</a>');
	});
});