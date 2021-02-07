let currentDate = new Date();

//Current Time
function updateTime(i) {
	if (i < 10) {
		return '0' + i;
	} else {
		return i;
	}
}

function currentTime() {
	let timeNow = new Date();
	let hour = timeNow.getHours();
	let min = timeNow.getMinutes();
	let sec = timeNow.getSeconds();
	let amOrPm;
	// Format hours, minutes and seconds
	if (hour > 12) {
		amOrPm = 'PM';
		hour = hour - 12;
	} else {
		amOrPm = 'AM';
	}

	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	document.getElementById('current-time').innerText =
		hour + ':' + min + ':' + sec + ' ' + amOrPm;
	let t = setTimeout(function () {
		currentTime();
	}, 1000); /* setting timer */
}

currentTime();

//Current Date
let daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
let arrMonths = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
let weekday = currentDate.getDay();
let month = currentDate.getMonth();
let todaysDate = currentDate.getDate();
let year = currentDate.getFullYear();
let ordinalDate = numberToOrdinal(todaysDate);
document.getElementById('current-date').innerHTML =
	daysOfWeek[weekday] +
	', ' +
	arrMonths[month] +
	' ' +
	ordinalDate +
	' ' +
	year;

function numberToOrdinal(n) {
	let j = n % 10;
	let k = n % 100;

	if (n == 0) {
		return n;
	}

	if (j == 1 && k != 11) {
		return n + 'st';
	}
	if (j == 2 && k != 12) {
		return n + 'nd';
	}
	if (j == 3 && k != 13) {
		return n + 'rd';
	}
	return n + 'th';
}
