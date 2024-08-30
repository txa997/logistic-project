// preloader
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('load', function(){
		setTimeout(function() {

			// hero-slider
			if($('.laa-hero-1-active').length) {
				let slider = new Swiper('.laa-hero-1-active', {
					loop: true,
					spaceBetween: 0,
					speed: 500,
					autoplay: {
						delay: 4000000,
					},

                    effect: "fade",
					fadeEffect: {
						crossFade: true
					},
			
					navigation: {
						nextEl: ".laa-h1-slider-next",
						prevEl: ".laa-h1-slider-prev",
					},
			
				});
			}


		}, 500);

	})

});


// hero-slider
if($('.laa-s1-active').length) {
	let slider = new Swiper('.laa-s1-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		autoplay: {
			delay: 5000000,
		},

		// effect: "fade",
		// fadeEffect: {
		// 	crossFade: true
		// },

	});
}