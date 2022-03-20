var $ = jQuery.noConflict();

jQuery(document).ready(function($){

$('body').addClass('loaded');
// Portfolio slider
$('.portfolio-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 579,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Logo slider 
$('.logo-slider').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 1000,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows:5,
  cssEase: 'linear',
  fade:true,
   responsive: [
    {
      breakpoint: 991,
      settings: {
        rows:4
      }
    },
    {
      breakpoint: 767,
      settings: {
        rows:3
      }
    },
    {
      breakpoint: 400,
      settings: {
        rows:2
      }
    }
  ]

});


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});




gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  
  // desktop
  "(min-width: 768px)": function() {
   const animateProcess = gsap.utils.toArray(".animate-child");
    animateProcess.forEach((title) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            once:true,
            start: 'top 90%', 
            toggleClass:'animated',
          }
        })
    });
  }, 
  
  // mobile
  "(max-width: 767px)": function() {
   const animateProcess = gsap.utils.toArray(".animate-child");
    animateProcess.forEach((title) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            once:true,
            start: 'top 100%', 
            toggleClass:'animated',
          }
        })
    });
  }
  
});
ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 768px)": function() {
        gsap.utils.toArray(".block-img-shape-2").forEach(cb => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cb,
                    start: "top bottom",
                    // markers:true,
                    scrub: true
                }
            });
            tl.to(cb, {
                y: -82,
            });
        });
    },

    // mobile
    "(max-width: 767px)": function() {
        gsap.utils.toArray(".block-img-shape-2").forEach(cb => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cb,
                    start: "top bottom",
                     // markers:true,   
                    scrub: true
                }
            });
            tl.to(cb, {
                 y: -82,
            });
        });
    }

});

ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 768px)": function() {
        gsap.utils.toArray(".block-img-shape-3").forEach(cb => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cb,
                    start: "top bottom",
                    scrub: true
                    // markers:true
                }
            });
            tl.to(cb, {
                y: -158,
            });
        });
    },

    // mobile
    "(max-width: 767px)": function() {
        gsap.utils.toArray(".block-img-shape-3").forEach(cb => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cb,
                    start: "top bottom",
                    scrub: true
                    // markers:true
                }
            });
            tl.to(cb, {
                y: -158,
            });
        });
    }

});




/*========================================*/ 
/* Gsap header Shape Animation Start */ 
/*========================================*/

ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 1200px)": function() {

          gsap.to(".htp_layer_animate_1", {
            scrollTrigger:{
              trigger: ".htp_layer_animate_1", 
              //toggleActions: "restart none none none",
              start: "top 30px", 
              end: "+=300",
              scrub: true,
              
            },
              clipPath: "polygon(84.3757% 0px, 100% -5%, 100% 10.7232%, 50% 1.0406%, 0% 11.0354%, 0px -5%, 14.0406% 0%)",

          })


          gsap.to(".htp_layer_animate_2", {
            scrollTrigger:{
              trigger: ".htp_layer_animate_2", 
              //toggleActions: "restart none none none",
              start: "top -50px",
              end: "+=300", 
              scrub: true,
            },
            clipPath: "polygon(50% 7.6292%, 100% 0%, 100% 24%, 50% 19%, 0% 24%, 0% 0%)",
          })



          gsap.to(".htp_layer_animate_3", {
            scrollTrigger:{
              trigger: ".htp_layer_animate_3", 
             // toggleActions: "restart none none none",
              start: "top -30px", 
              end: "+=300",
              scrub: true,
            },
            clipPath: "polygon(0% 0%, 101.891% 0px, 124% 26.6%, 50% 19.3%, 0px 24.4%)",
          })

    }

});


