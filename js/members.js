$(document).ready(function() {
	$('a').click(function() {
		$(this).css("text-decoration", "none");
	});
	$('#calendar, #events').hide();
	$('#password').keyup(function() {
		if($('#username').val().toUpperCase() == "IHS2O" && $('#password').val() == "1stplace") {
			$('#about, #fade').fadeOut('fast');
			$('#calendar, #events').fadeIn('fast');
		}
	});
});