var end = new Date('04/18/2015 8:30 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	if (distance < 0) {
		clearInterval(timer);
		document.getElementById('countdown').innerHTML = '0 days, 0 hours, 0 minutes, and 0 seconds';
		return;
	}
	var days = Math.floor(distance / _day);
	var hours = Math.floor((distance % _day) / _hour);
	var minutes = Math.floor((distance % _hour) / _minute);
	var seconds = Math.floor((distance % _minute) / _second);

	document.getElementById('countdown').innerHTML = '<span class="time">' + days + '</span> days, ';
	document.getElementById('countdown').innerHTML += '<span class="time">' + hours + '</span> hours, ';
	document.getElementById('countdown').innerHTML += '<span class="time">' + minutes + '</span> minutes, and ';
	document.getElementById('countdown').innerHTML += '<span class="time">' + seconds + '</span> seconds';
}
timer = setInterval(showRemaining, 1000);