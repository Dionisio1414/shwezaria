$(function() {
	$(".owl-carousel").owlCarousel({
		nav: true,
		margin: 60,
		navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
		responsiveClass:true,
		responsive : {
			768 : {
				center : true,
				margin : 40
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
	
	
});