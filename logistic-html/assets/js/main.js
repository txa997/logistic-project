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
						delay: 5000,
					},

					pagination: {
						el: ".laa-h-3-pagination",
						clickable: true,
					},

					navigation: {
						nextEl: ".laa-h1-slider-next",
						prevEl: ".laa-h1-slider-prev",
					},
			
				});
			}

			
			if($('.txaa-split-text-3').length) {
				var txasplit2 = $(".txaa-split-text-3");

				if(txasplit2.length == 0) ; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
				
					el.split = new SplitText(el, { 
						type: "lines,words,chars",
						linesClass: "split-line"
					});
				
					if( $(el).hasClass('txaa-split-text-3-ani') ){
						gsap.set(el.split.chars, {
							opacity: .2,
							color: "#F62459",
							x: "-5",
						});
					}
				
					el.anim = gsap.to(el.split.chars, {
						scrollTrigger: {
							trigger: el,
							start: "top 90%",
							end: "top 60%",
							markers: false,
							scrub: 1,
						},
				
						x: "0",
						y: "0",
						color: "inherit",
						opacity: 1,
						duration: .7,
						stagger: 0.2,
					});
				
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

// newsletter-1
var laa_nl1 = gsap.timeline({

	scrollTrigger: {
	  animation: laa_nl1,
	  trigger: '.laa-newsletter-1-plane',
	  start: "top 95%",
	  end: "top 50%",
	  scrub: 3,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_nl1.from(".laa-newsletter-1-plane" , { xPercent: 100 , yPercent: -100, scale: .3, rotate: -30 , opacity: 0 })

// footer-1
var laa_f1 = gsap.timeline({

	scrollTrigger: {
	  animation: laa_f1,
	  trigger: '.laa-footer-1-truk',
	  start: "top 100%",
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
laa_f1.from(".laa-footer-1-truk" , { xPercent: 100 , duration: 1, opacity: 0 })


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


// pattn-1
document.querySelectorAll('.laa-pattn').forEach((section, index) => {
	const timeline = gsap.timeline({
	  scrollTrigger: {
		trigger: section,
		start: "top 95%",
		toggleActions: "play reverse play reverse",
		markers: false,
	  }
	});
  
	// Animate each child element within the section based on its index
	timeline.from(section.querySelector('.laa-pattn-1'), { xPercent: -100, opacity: 0.16, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-2'), { yPercent: -100, opacity: 0.16, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-3'), { xPercent: -100, opacity: 0.56, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-4'), { yPercent: -100, opacity: 0.08, duration: .3 });
  });
  

// pattn-1
document.querySelectorAll('.laa-pattn-two').forEach((section, index) => {
	const timeline = gsap.timeline({
	  scrollTrigger: {
		trigger: section,
		start: "top 95%",
		toggleActions: "play reverse play reverse",
		markers: false,
	  }
	});
  
	// Animate each child element within the section based on its index
	timeline.from(section.querySelector('.laa-pattn-two-1'), { yPercent: 100, opacity: 0.16, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-two-2'), { xPercent: -100, opacity: 0.16, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-two-3'), { xPercent: -100, opacity: 0.56, duration: .3 });
	timeline.from(section.querySelector('.laa-pattn-two-4'), { yPercent: 100, opacity: 0.08, duration: .3 });
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
			delay: 5000,
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


// footer-menu

var dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		var dropdown = this.nextElementSibling;
		if (dropdown.style.display === 'block') {
			dropdown.style.display = 'none';
		} else {
			// Hide all other dropdowns
			document.querySelectorAll('.has-dropdown').forEach(function(ul) {
				ul.style.display = 'none';
			});
			dropdown.style.display = 'block';
		}
	});
});


$('.laa-scrollup').on("click", function()  {
	$("html, body").animate({
		scrollTop: 0
	}, 800);
	return false;
});