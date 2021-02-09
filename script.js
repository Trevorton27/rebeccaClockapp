let currentDate = new Date();

//Current Time

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

function updateTime(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
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
  if (number > 20 || number < 10) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

currentTime();

setInterval(currentTime, 1000);
