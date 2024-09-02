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

var txasplit1 = $('.txaa-split-text-1');
if(txasplit1.length == 0) ; gsap.registerPlugin(SplitText); txasplit1.each(function(index, el) {
	el.split = new SplitText(el, { 
	type: "lines",
	linesClass: "split-line"
	});
});


// about-1
var laa_a1 = gsap.timeline({

	scrollTrigger: {
	  animation: laa_a1,
	  trigger: '.laa-about-1-area',
	  start: "top 50%",
	  end: "top -20%",
	  scrub: 3,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_a1.from(".laa-about-1-ship-box" , { xPercent: 100 })
laa_a1.from(".laa-about-1-ship-box-ship" , { xPercent: 100 , scale: .5 })

// animate-1
var laa_ani1 = gsap.timeline({

	scrollTrigger: {
	  animation: laa_ani1,
	  trigger: '.laa-animate-1-wrap',
	  start: "top 95%",
	  end: "top 20%",
	  scrub: 3,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_ani1.from(".laa-animate-1-cloud-1" , { xPercent: 100 ,  opacity: 0  })
laa_ani1.from(".laa-animate-1-cloud-2" , { xPercent: 50 ,  opacity: 0  }, "<=")
laa_ani1.from(".laa-animate-1-cloud-3" , { xPercent: 100 ,  opacity: 0  }, "<=.1")
laa_ani1.from(".laa-animate-1-plane" , { xPercent: 100 , yPercent: -100, scale: .3, rotate: -30 , opacity: 0 }, "<=.5")

// faq-1
var laa_faq = gsap.timeline({

	scrollTrigger: {
	  animation: laa_faq,
	  trigger: '.laa-faq-1-img',
	  start: "top 95%",
	  end: "top 50%",
	  scrub: 4,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_faq.from(".laa-faq-1-img" , { xPercent: -100 ,  })

gsap.utils.toArray(".laa-img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: .5,
		},
	}); 
	tl.from(image, {
		yPercent: -30,
		ease: "none",
	}).to(image, {
		yPercent: 30,
		ease: "none",
	}); 
});

// services-1-slider
if($('.laa-s1-active').length) {
	let slider = new Swiper('.laa-s1-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

	});
}
	
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
	
// features-1-slider
if($('.laa-f1-active').length) {
	let slider = new Swiper('.laa-f1-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".laa-f1-next",
			prevEl: ".laa-f1-prev",
		},

	});
}
	
// testimonial-1-slider
if($('.laa-t1-active').length) {
	let slider = new Swiper('.laa-t1-active', {
		loop: true,
		spaceBetween: 30,
		speed: 1000,
		slidesPerView: 1,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".laa-t1-next",
			prevEl: ".laa-t1-prev",
		},

	});
}
if($('.laa-t1-active-2').length) {
	let slider = new Swiper('.laa-t1-active-2', {
		loop: true,
		spaceBetween: 30,
		speed: 1000,
		slidesPerView: 1,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".laa-t2-next",
			prevEl: ".laa-t2-prev",
		},

	});
}
	
// text-slide-1
if($('.text-slide-1-active').length) {
	$('.text-slide-1-active').marquee({
		gap: 48,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
}


/* faq-active-class */
$(document).on('click', '.laa-accordion-item', function(){
	$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
})



// nice-selector
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}