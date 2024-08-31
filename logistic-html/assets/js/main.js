// preloader
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('load', function(){
		setTimeout(function() {

			// hero-slider
			if($('.laa-hero-1-active').length) {
				let slider = new Swiper('.laa-hero-1-active', {
					loop: true,
					spaceBetween: 0,
					speed: 1000,
					autoplay: {
						delay: 4000,
					},

			
					navigation: {
						nextEl: ".laa-h1-slider-next",
						prevEl: ".laa-h1-slider-prev",
					},
			
				});
			}


		});

	})

});


// title-animation
// gsap.registerPlugin(SplitText);

var txasplit1 = $('.txaa-split-text-1');
if(txasplit1.length == 0) ; gsap.registerPlugin(SplitText); txasplit1.each(function(index, el) {
	el.split = new SplitText(el, { 
	type: "lines",
	linesClass: "split-line"
	});
});



	
// client-slider
if($('.laa-c1-active').length) {
	let slider = new Swiper('.laa-c1-active', {
		loop: true,
		spaceBetween: 32,
		speed: 500,
		slidesPerView: 4,

		autoplay: {
			delay: 6000,
		},

		navigation: {
			nextEl: ".laa-c1-next",
			prevEl: ".laa-c1-prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},

		},
	});
}
	
// services-2-slider
if($('.laa-s2-active').length) {
	let slider = new Swiper('.laa-s2-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,

		autoplay: {
			delay: 5000000,
		},

		navigation: {
			nextEl: ".laa-2-slider-next",
			prevEl: ".laa-2-slider-prev",
		},

	});
}

var laa_a1 = gsap.timeline({

	scrollTrigger: {
	  animation: laa_a1,
	  trigger: '.laa-about-1-area',
	  start: "top 50%",
	  end: "top -20%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_a1.from(".laa-about-1-ship-box" , { xPercent: 100 })
laa_a1.from(".laa-about-1-ship-box-ship" , { xPercent: 100 , scale: .5 })

// nice-selector
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}