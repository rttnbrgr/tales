function navToggle() {

	var navToggle = $('.nav-toggle');

	navToggle.on('click', function () {
		$(this).toggleClass('active');
		$('#navbar').toggleClass('active');
	});
	
}

// make the nav slide up on scroll
function headShrinkr() {
	
	$window = $(window),
	$sidebar = $('#hmcc-sidebar'),
	mamaBear = 992,	
	test = "We Rollin",
	count = 1

	$window.on('scroll', function(){

		var top = $window.scrollTop(),			

		if(count) {
			$('#navbar').toggleClass('shrink-on');
			count = 0;
		} else {
			console.log('already did tht');
		}

		// if ( $window.width() > mamaBear ){
			
		// 	// console.log('wide enough');

		// 	if ( top > goal ){
		// 		$sidebar.addClass('fixie').css('padding-top', goal);
		// 	} else {
		// 		$sidebar.removeClass('fixie').css('padding-top', 'inherit');
		// 		// console.log('else1');
		// 	}
		// } 

		// else { 
			// return false;
			// $sidebar.removeClass('fixie').css('padding-top', 'inherit');
			// console.log('else2');
		// }

	});
}

$(function() {
	navToggle();
	headShrinkr();
});