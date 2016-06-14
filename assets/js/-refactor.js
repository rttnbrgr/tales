

	var howManySkills = $('.skill').length
	if( howManySkills > 5 ) {
		$('.skills:gt(4)').hide();
	}


	var howManyTags = $('.skill__tag').length;
	console.log(howManyTags);

	$('.skill__tag').click(function(e) {

		
		// remove active state
		$('.skill__tag').removeClass('active');
		
		// add active class
		$(this).addClass('active');

		// $('ul > li').click(function() {
		// var t = $(this).index($(this).parent());
		var skillsArray = ['all', 'dev', 'design', 'non'];
		var skillIndex = $(this).index();
		if ( skillIndex === 0 ){
			console.log('show all dem skills');
			$('.skill').show();
		} else if ( skillIndex === 1 ) {
			console.log('dev');
			$('.skill.js-skill-dev').show();
			$('.skill').not('.js-skill-dev').hide();
		} else if ( skillIndex === 2 ) {
			$('.skill.js-skill-design').show();
			$('.skill').not('.js-skill-design').hide();
		} else if ( skillIndex === 3 ) {
			$('.skill.js-skill-non').show();
			$('.skill').not('.js-skill-non').hide();
		}

		
		
		// console.log()




	});

	// skill bar
	// numberOfskills = $('.skill').length;
	// var setSkillBars = function() {
	// 	console.log('inside skill bars');
	// 	for( var i=0; i<numberOfskills; i++) {
			
	// 		var level = $('.skill__bar')[i].getAttribute('data-skill');
	// 		console.log(i + ' = ' + level);			
	// 	}
	// 	console.log('after loop');
	// }

	$(function() {
		// setSkillBars();
	})

	// filter skills
