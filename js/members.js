$(document).ready(function() {
	$('a').click(function() {
		$(this).css("text-decoration", "none");
	});

	$('#welcome, #calendar, #events').hide();
	
	var users = [
		["Interlake Science Olympiad", "interlakescienceolympiad@gmail.com", "1stplace"],
		["George", "gmsun@uw.edu", "bernard"],
		["Edison", "magicmaster97@gmail.com", "magicalforest"],
		["Nelson", "nfliu@uw.edu", "balsa"],
		["Townsend Harris", "thscioly@gmail.com", "sangiotis#1"],
		["Guest" , "guest", "162452498008"]
	];

	$('#password').keyup(function() {
		for(var i = 0; i < users.length; i++) {
			if($('#username').val().toUpperCase() == users[i][1].toUpperCase() && $('#password').val() == users[i][2]) {
				$('#about, #fade').fadeOut('fast');
				$('#welcome, #calendar, #events').fadeIn('fast');
				$('#member-name').html(users[i][0])
			}
		}
	});
});