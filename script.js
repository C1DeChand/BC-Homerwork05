// Current day rendering

var today = new Date();

console.log(today)

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var currentDay = weekday[today.getDay()];

console.log(currentDay)

var monthName = new Array(12);
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "Sepetmber";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";

var currentMonth = monthName[today.getMonth()]

console.log(currentMonth)

var currentDate = today.getDate()

console.log(currentDate)

$("#currentDay").append(currentDay + ", " + currentMonth + " " + currentDate)

var currentHour = today.getHours()

console.log(currentHour)

// Color changes based on current time hour.

$(".timeSlotContainer").each(function(){
    var textBox = $("input[type=text]", this);
    var hourData = textBox.attr("data-hour")
    if (currentHour == hourData) {
        $(".centerColor", this).removeClass("green grey").addClass("red")
    }
    if (currentHour > hourData) {
        $(".centerColor", this).removeClass("green red").addClass("grey")
    }
    if (currentHour < hourData) {
        $(".centerColor", this).removeClass("red grey").addClass("green")
    }
})

// Local Storage .setItem functions

$("#save9").click(function save(){
    var input9 = $("#textbox9");
    localStorage.setItem("text9", input9.val());
});
$("#save10").click(function save(){
    var input10 = $("#textbox10");
    localStorage.setItem("text10", input10.val());
});
$("#save11").click(function save(){
    var input11 = $("#textbox11");
    localStorage.setItem("text11", input11.val());
});
$("#save12").click(function save(){
    var input12 = $("#textbox12");
    localStorage.setItem("text12", input12.val());
});
$("#save13").click(function save(){
    var input13 = $("#textbox13");
    localStorage.setItem("text13", input13.val());
});
$("#save14").click(function save(){
    var input14 = $("#textbox14");
    localStorage.setItem("text14", input14.val());
});
$("#save15").click(function save(){
    var input15 = $("#textbox15");
    localStorage.setItem("text15", input15.val());
});
$("#save16").click(function save(){
    var input16 = $("#textbox16");
    localStorage.setItem("text16", input16.val());
});
$("#save17").click(function save(){
    var input17 = $("#textbox17");
    localStorage.setItem("text17", input17.val());
});

// Local Storage .getItem functions

$("#textbox9").on("load", function(){
    var stored9 = localStorage.getItem("text9");
$("#textbox9").text(stored9)
});
$("#textbox10").on("load", function(){
    var stored10 = localStorage.getItem("text10");
$("#textbox10").text(stored9)
});
$("#textbox11").on("load", function(){
    var stored11 = localStorage.getItem("text11");
$("#textbox11").text(stored11)
});
$("#textbox12").on("load", function(){
    var stored12 = localStorage.getItem("text12");
$("#textbox12").text(stored12)
});
$("#textbox13").on("load", function(){
    var stored13 = localStorage.getItem("text13");
$("#textbox13").text(stored13)
});
$("#textbox14").on("load", function(){
    var stored14 = localStorage.getItem("text14");
$("#textbox14").text(stored14)
});
$("#textbox15").on("load", function(){
    var stored15 = localStorage.getItem("text15");
$("#textbox15").text(stored15)
});
$("#textbox16").on("load", function(){
    var stored16 = localStorage.getItem("text16");
$("#textbox16").text(stored16)
});
$("#textbox17").on("load", function(){
    var stored17 = localStorage.getItem("text17");
$("#textbox17").text(stored17)
});
