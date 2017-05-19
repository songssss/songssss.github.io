$(function(){

	//TweenMax.from($('.item01'), 5,{opacity:0});



	$('.addAnim').on('click', function(){
		$(this).next().toggleClass('move');
		console.log('aa');
	});

});