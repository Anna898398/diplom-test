$('#owlCarousel').owlCarousel({
	loop: true,
	center: true,
	items: 3,
	margin: 0,
	//  dots: true,
	//	autoplay: true,
	//  autoplayTimeout: 8500,
	smartSpeed: 450,
	responsive: {
		0: {
			items: 1
		},
		
		800: {
			items: 3
		}
	}
});
