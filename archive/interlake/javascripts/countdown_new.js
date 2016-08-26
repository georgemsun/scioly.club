var end = new Date('02/19/2016 12:00 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var _month = _day * 30.5;
var timer;

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	if (distance < 0) {
		clearInterval(timer);
		document.getElementById('countdown').innerHTML = '0 days, 0 hours, 0 minutes, and 0 seconds';
		return;
	}
	var months = Math.floor(distance / _month);
	var days = Math.floor((distance % _month) / _day);
	var hours = Math.floor((distance % _day) / _hour);
	var minutes = Math.floor((distance % _hour) / _minute);
	var seconds = ((distance % _minute) / _second).toFixed(3);

	document.getElementById('countdown').innerHTML = '<span class="time">' + months + '</span> months, ';
	document.getElementById('countdown').innerHTML += '<span class="time">' + days + '</span> days, ';
	document.getElementById('countdown').innerHTML += '<span class="time">' + hours + '</span> hours, ';
	document.getElementById('countdown').innerHTML += '<span class="time">' + minutes + '</span> minutes, and ';
	document.getElementById('countdown').innerHTML += '<span class="time">' + seconds + '</span> seconds';
}
timer = setInterval(showRemaining, 10);