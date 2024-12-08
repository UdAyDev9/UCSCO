(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});





$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.service_active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:2,
          nav:true
      },
      992:{
          items:3,
          nav:true
      },
      1200:{
          items:3,
          nav:true
      },
      1600:{
          items:3,
          nav:true
      }
  }
});

// review-active
$('.testmonial_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
dots:true,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          dots:false,
      },
      767:{
          items:1,
          dots:false,
      },
      992:{
          items:1,
      },
      1200:{
          items:1,
      },
      1500:{
          items:1
      }
  }
});

// review-active
$('.home_details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,

  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1500:{
          items:1,
          nav:true
      }
  }
});

// review-active
$('.case_active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:false,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:true,
autoplayHoverPause: true,
autoplaySpeed: 800,
// dotsData: true,
center: false,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:3,
          nav:false
      },
      992:{
          items:3,
          nav:false
      },
      1200:{
          items:3,
          nav:false
      },
      1500:{
          items:3,
          nav:true
      }
  }
});

// review-active
$('.property_banner_active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:false,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:true,
autoplayHoverPause: true,
autoplaySpeed: 800,
// dotsData: true,
center: false,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1
      },
      1200:{
          items:1
      },
      1500:{
          items:1,
          nav:true
      }
  }
});

// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $(document).ready(function() {
          $('select').niceSelect();
        });

        // prise slider 
        







})(jQuery);

//Slider automation

document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('.slider_bg');
        const images = [
            'url(img/banner/home_slider_2.png)',
            'url(img/banner/home_slider_3.png)',
            'url(img/banner/home_slider_1.jpeg)'
        ]; // List all your images here
        let currentIndex = 0;

        // Preload images
        const preloadedImages = images.map(src => {
            const img = new Image();
            img.src = src.replace('url(', '').replace(')', '').replace(/"/g, '');
            return img;
        });

        // Change background
        function changeBackground() {
            slider.style.backgroundImage = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }

        // Wait for all images to load before starting the slider
        Promise.all(preloadedImages.map(img => new Promise(resolve => {
            img.onload = resolve;
        }))).then(() => {
            // Set initial background
            changeBackground();

            // Start the background change interval
            setInterval(changeBackground, 2000); // Change every 5 seconds
        }).catch(error => {
            console.error('Error preloading images:', error);
        });
    });

//Highlights active/current page in menu
    // Get all menu items
    const menuItems = document.querySelectorAll('.uk-menu-item a');

    // Loop through each menu item
    menuItems.forEach(item => {
        // Get the current page URL
        const currentUrl = window.location.href;

        // Check if the link's href matches the current URL
        if (currentUrl.includes(item.getAttribute('href'))) {
            // Add the 'active' class to the current menu item
            item.parentElement.classList.add('active');
        }
    });


/**
   * Scroll top button
   */
 // Get the button
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");

 // Show the button when the user scrolls down 200px
 window.onscroll = function() {
     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         scrollToTopBtn.style.display = "block"; // Show button
     } else {
         scrollToTopBtn.style.display = "none"; // Hide button
     }
 };

 // Scroll smoothly to the top when the button is clicked
 scrollToTopBtn.onclick = function() {
     window.scrollTo({ top: 0, behavior: "smooth" });
 };
