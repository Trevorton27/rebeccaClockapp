let currentDate = new Date();

//Current Time
function updateTime(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}

function currentTime() {
  const timeNow = new Date();
  let hour = timeNow.getHours();
  const min = updateTime(timeNow.getMinutes());
  const sec = updateTime(timeNow.getSeconds());
  let amOrPm;
  // Format hours, minutes and seconds
  if (hour > 12) {
    amOrPm = 'PM';
    hour = hour - 12;
  } else {
    amOrPm = 'AM';
  }

  document.getElementById('displayHours').textContent = hour;
  document.getElementById('displayMinutes').textContent = min;
  document.getElementById('displaySeconds').textContent = sec;
  document.getElementById('amPm').textContent = amOrPm;
}

//Current Date
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const arrMonths = [
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
  'December'
];

const weekday = currentDate.getDay();
const month = currentDate.getMonth();
const todaysDate = currentDate.getDate();
const year = currentDate.getFullYear();
const ordinalDate = numberToOrdinal(todaysDate);

document.getElementById('day').textContent = daysOfWeek[weekday];
document.getElementById('month').textContent = arrMonths[month];
document.getElementById('date').textContent = ordinalDate;
document.getElementById('year').textContent = year;

function numberToOrdinal(number) {
  let j = number % 10;
  let k = number % 100;

  if (number == 0) {
    return number;
  }

  if (j == 1 && k != 11) {
    return number + 'st';
  }
  if (j == 2 && k != 12) {
    return number + 'nd';
  }
  if (j == 3 && k != 13) {
    return number + 'rd';
  }
  return number + 'th';
}

currentTime();

setInterval(currentTime, 1000);
