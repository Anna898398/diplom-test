/* кнопка прокрутки наверх страницы */
$(function() {
 
	$(window).scroll(function() {
	 
		if($(this).scrollTop() !== 0) {
		
			$('.btn-up').fadeIn();
		
		} else {
		
			$('.btn-up').fadeOut();
		
		}
	 
	});

	 
	$('.btn-up').click(function() {
	 
		$('body,html').animate({scrollTop:0},300);
	 
	});	 
});