"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Kris Krupski 
   Date:  1/14/21

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// Set the date Displayed in the calendar
var thisDay = new Date()
    // Write this calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);
// Function to generate the calendar table
function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}


// Function to write the calendar caption

function calCaption(calDate) {
    //monthName array contains the list of month names
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //Determine the current month
    let thisMonth = calDate.getMonth();

    // Determine the current year

    let thisYear = calDate.getFullYear();

    // Write the Caption

    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";

}

function calWeekdayRow() {
    let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let rowHTML = "<tr>"

    for (var i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
    }

    rowHTML += "</tr>";
    return rowHTML;
}

function daysInMonth(calDate) {

    let dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let thisYear = calDate.getFullYear();
    let thisMonth = calDate.getMonth();

    if (thisYear % 4 === 0) {
        if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
            dayCount[1] = 29;
        }
    }

    return dayCount[thisMonth];
}

function calDays(calDate) {
    let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    let weekDay = day.getDay();

    let htmlCode = "<tr>";
    for (let i = 0; i < weekDay; i++) {
        htmlCode += "<td></td>";
    }
    let totalDays = daysInMonth(calDate);
    let highlightDay = calDate.getDate();
    for (let i = 1; i <= totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();

        if (weekDay === 0) htmlCode += "<tr>";
        if (i === highlightDay) {
            htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
        } else {
            htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
        }

        if (weekDay === 6) htmlCode += "</tr>";
    }

    return htmlCode;
}