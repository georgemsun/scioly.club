$(document).ready(function() {
	$('a').click(function() {
		$(this).css("text-decoration", "none");
	});

	$('#calendar, #events').hide();
	
	var users = [
		["interlakescienceolympiad@gmail.com", "1stplace"],
		["gmsun@uw.edu", "bernard"],
		["magicmaster97@gmail.com", "magicalforest"],
		["thscioly@gmail.com", "sangiotis#1"],
		["nelsonliu2009@gmail.com", "nfliu"]
	];

	$('#password').keyup(function() {
		for(var i = 0; i < users.length; i++) {
			if($('#username').val().toUpperCase() == users[i][0].toUpperCase() && $('#password').val() == users[i][1]) {
				$('#about, #fade').fadeOut('fast');
				$('#calendar, #events').fadeIn('fast');
			}
		}
	});
});