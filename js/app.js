var NeonSines = function(){
		this.win 				= $(window);
		this.body 				= $('body');
		this.winHeight 			= window.innerHeight;
		this.winWidth 			= window.innerWidth; 
		this.sections 			= $('.slide');
		this.home 				= $('#home, .parallax-layer');
		this.content 			= $('.section');
		this.menuToggle 		= $('.nav-icon');
		this.nav 				= $('.nav-fullscreen');
		this.navLink 			= $(".navbar-nav a[href^='#'], a.nav-link[href^='#'], #nav-mobile a[href^='#']");
		this.isMobile 			= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
		this.init();
}; 
 
NeonSines.prototype =  { 
	init: function() { 
		// sets each sectio to the window's height
		this.sections.css({
			'min-height': this.winHeight
		});
		//vertical center content
		this.content.each(function(index, el) {
			var self = $(el),
				myHeight = self.innerHeight(),
				winDist = window.innerHeight / 2,
				contentDist = myHeight / 2,
				distance = winDist -  contentDist
			;
			console.log(winDist -  contentDist + ' ' + myHeight);
			self.css({
				'padding-top': distance
			});

		});
		 
		if (!this.isMobile){
			// positioning for parallax section
			this.home.css({
				'min-height': this.winHeight
			});
		}

		this.navLink.on('click', function(e) {
		  	// prevent default anchor click behavior
		   	e.preventDefault();
		   	// store hash
		   	var hash = this.hash;
		   	// animate
		   	$('html, body').animate({
		       	scrollTop: $(hash).offset().top
		    }, 700, function(){
		       	// when done, add hash to url
		       	window.location.hash = hash;
		    });

		});

		// Menu Toggle
		this.navLink.on('click', function(){
            var mobileNav = $('.nav-fullscreen');
            //open and close mobile nav
            if ( mobileNav.hasClass('open')){
                //menu toggle animation
                mobileNav.removeClass('open');
				$('.nav-icon').toggleClass('active');
            }
		});

		this.menuToggle.on('click', function(){
			$('.nav-icon').toggleClass('active');
			var mobileNav = $('.nav-fullscreen');
            //open and close mobile nav
            if ( mobileNav.hasClass('open')){
                //menu toggle animation
                mobileNav.removeClass('open');
            } else {
                //menu toggle animation
                mobileNav.addClass('open');
            }
		});

	},
	toggleMenu: function(){
		$('.nav-icon').toggleClass('active');
		$('.nav-fullscreen').toggleClass('open');




	}
}