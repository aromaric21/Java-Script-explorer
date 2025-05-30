// Dealing with Dates and Times
// Arguments Associated with the Date Object

// date : a variable name
// yyyy : The year - four-digit integers
// yy : The year - two-digit integers
// month : The month - The full month name from "January" to "December"
// mth : The month - integers from 0 (January) to 11 (December)
// dd : The day of the month - integers from 1 to 31
// hh : The hour of the day - integers from 0 (midnight) to 23 (11:00 PM)
// mm : The minute of the hour - integers from 0 to 59
// ss : The second of the minute - integers from 0 to 59
// ms : The milliseconds of the second - integers from 0 to 999

// Date Object Methods That Extract Date Values
date.getFullYear()
date.getMonth()
date.getDate()
date.getDay()
date.getHours()
date.getMinutes()
date.getSeconds()
date.getMilliseconds()
date.getTime()

// Date Object Methods That Set Date Values
date.setFullYear(yyyy)
date.setMonth(mth)
date.setDate(dd)
date.setHours(hh)
date.setMinutes(mm)
date.setSeconds(ss)
date.setMilliseconds(ms)
date.setTime(ms)

// Getting to know the Date object
const dateToday = new Date();
//console.log(dateToday.getFullYear(), dateToday.getMonth()+ 1, dateToday.getDate());

const date = new Date("month dd yyyy hh:mm:ss");
const date1 = new Date("month dd, yyyy");
const date2 = new Date("yyyy, mth, dd, hh, mm, ss");
const date3 = new Date("yyyy, mth, dd");
const date4 = new Date("ms");

console.log(date2);