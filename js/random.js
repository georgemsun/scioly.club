$(document).ready(function() {
	$('.card').click(function() {
		$(this).fadeTo('slow', 0.5);
		$('p').show();
	});
});