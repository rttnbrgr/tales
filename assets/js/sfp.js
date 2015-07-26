// slide in and out
function sfpToggle(){
	$('.sfp-toggle').on('click', function(){
		$('.sfp-wrapper').toggleClass('slide');
	});	
}
	

// youtube autoplay
function autoPlayVideo(vcode, width, height, wrapper){
  "use strict";
  $(wrapper).html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&modestbranding=1&autohide=1&loop=1&rel=0&wmode=transparent&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
  console.log('autoplay swapped');
}

function videoHandler(){

	$('.thanks-play').click( function(e) {
		e.preventDefault();

	  console.log('let\'s go');
	  var vcode = 'Z-48u_uWMHY'
	  		width = 1280
	  		height = 720
	  		wrapper = '.videoWrapper'
	  
	  autoPlayVideo(vcode, width, height, wrapper);

	  $(this).hide();
	  $(wrapper).toggleClass('curtains');

	  // $('.curtain').css('opacity', 0).slideToggle();
	  // $(this).closest('.curtain').slideToggle();
	  // $('.curtain').slideToggle();
	  // $('#cinema').toggleClass('lightsDown');
	});
}

// smooth-scroll
function treadMill() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top          
        }, 1000);
        console.log('treadmill just ran thru' + target);
        return false;
      }
    }
  });
  // catch empty links
  $('a[href=#]').click(function(e) {
  	e.preventDefault();
  });

}