//1__________________________________________________
$(document).ready(function($) {
    
    $('.box-text-1').click(function() {
        $('.modal-window-item-1').fadeIn();
        return false;
    });

	$('.box-text-2').click(function() {
        $('.modal-window-item-2').fadeIn();
        return false;
    });

	$('.box-text-3').click(function() {
        $('.modal-window-item-2').fadeIn();
        return false;
    });

	$('.box-text-4').click(function() {
        $('.modal-window-item-2').fadeIn();
        return false;
    });

	$('.box-text-5').click(function() {
        $('.modal-window-item-2').fadeIn();
        return false;
    });



//1__________________________________________________
    $('.btn-close-modal-window-item').click(function() {
        $(this).parents('.modal-window-item-1').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-item-1').fadeOut();
        }
    });
    
    $('.modal-window-item-1').click(function(e) {
        if ($(e.target).closest('.modal-window-content-1').length === 0) {
            $(this).fadeOut();					
        }
    });



//2__________________________________________________
	$('.btn-close-modal-window-item').click(function() {
        $(this).parents('.modal-window-item-2').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-item-2').fadeOut();
        }
    });
    
    $('.modal-window-item-2').click(function(e) {
        if ($(e.target).closest('.modal-window-content-2').length === 0) {
            $(this).fadeOut();					
        }
    });
    
});


/* 
//2__________________________________________________
$(document).ready(function($) {
    
    $('.box-text-2').click(function() {
		$('.modal-window-item-2').fadeIn();
		return false;
	});



	$('.btn-close-modal-window-item').click(function() {
		$(this).parents('.modal-window-item-2').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-window-item-2').fadeOut();
		}
	});
	
	$('.modal-window-item-2').click(function(e) {
		if ($(e.target).closest('.modal-window-content-2').length === 0) {
			$(this).fadeOut();					
		}
	});
    
});



//3__________________________________________________
$(document).ready(function($) {
    
    $('.box-text-3').click(function() {
		$('.modal-window-item-3').fadeIn();
		return false;
	});



	$('.btn-close-modal-window-item').click(function() {
		$(this).parents('.modal-window-item-3').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-window-item-3').fadeOut();
		}
	});
	
	$('.modal-window-item-3').click(function(e) {
		if ($(e.target).closest('.modal-window-content-3').length === 0) {
			$(this).fadeOut();					
		}
	});
    
});



//4__________________________________________________
$(document).ready(function($) {
    
    $('.box-text-4').click(function() {
		$('.modal-window-item-4').fadeIn();
		return false;
	});



	$('.btn-close-modal-window-item').click(function() {
		$(this).parents('.modal-window-item-4').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-window-item-4').fadeOut();
		}
	});
	
	$('.modal-window-item-4').click(function(e) {
		if ($(e.target).closest('.modal-window-content-4').length === 0) {
			$(this).fadeOut();					
		}
	});
    
});



//5__________________________________________________
$(document).ready(function($) {
    
    $('.box-text-5').click(function() {
		$('.modal-window-item-5').fadeIn();
		return false;
	});



	$('.btn-close-modal-window-item').click(function() {
		$(this).parents('.modal-window-item-5').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-window-item-5').fadeOut();
		}
	});
	
	$('.modal-window-item-5').click(function(e) {
		if ($(e.target).closest('.modal-window-content-5').length === 0) {
			$(this).fadeOut();					
		}
	});
    
}); */