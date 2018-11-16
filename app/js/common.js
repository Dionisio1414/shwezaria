$(function() {
	$(".owl-carousel").owlCarousel({
		nav: true,
		navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
		responsive : {
			991 : {
				items: 3,
				center : true,
				startPosition: 1
			},
			768 : {
				items: 1
			},
			
			0 : {
				items: 1
			}
			
		}
	});
	
	var $hamburger = $('.header .header__left .hamburger-menu'),
		$mainMenu = $('.main .main__popup-menu');
	$hamburger.click(function() {
		$(this).toggleClass('hamburger-open');
		if($(this).hasClass('hamburger-open')) {
			$mainMenu.show().animate({
				opacity: 1
			}, 600);	
		} else {
			$mainMenu.animate({
				opacity: 0
			}, 400, function() {
				$(this).hide();
			});
		}
	});
	
	
	$('.main__socials .button-down').click(function() {
		$('html, body').animate({scrollTop:$('#next-screen').position().top - 60}, 1000);
	});
	
	
	$(document).bind('mousewheel', function (e) { 
		var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*10000); 
		e.preventDefault(); 
		e.stopPropagation(); 
		$(document.body).stop().animate({ 
			 scrollTop : nt 
		 } , 500);  
	});
	
});