$(document).ready(function() {
	$('a').click(function() {
		$(this).css("text-decoration", "none");
	});

	$('#calendar, #events').hide();
	
	var users = [
		["interlakescienceolympiad@gmail.com", "1stplace"],
		["gmsun@uw.edu", "bernard"],
		["magicmaster97@gmail.com", "magicalforest"],
		["nfliu@uw.edu", "balsa"],
		["thscioly@gmail.com", "sangiotis#1"],
		["guest", "162452498008"]
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