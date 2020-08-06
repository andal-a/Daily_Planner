$(document).ready(function () {
    
/*Appends the current date and time*/
$("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));
    
/*Functionality of Save Button*/
$(".saveBtn").on("click", function() {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, text);
})
    
/*Clear local storage to reset page*/
$(".clearBtn").on("click", function() {
    localStorage.clear();
    location.reload()
});
    
/*Saved data from each textbox*/
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
    
/*Change color of time blocks*/
var currentHour = moment().hour("H")
updateColor();
    
function updateColor() {
    if (currentHour > 9) {
        $("#9").addClass("past");
    }
    else if (currentHour >= 9 && currentHour < 10) {
        $("#9").addClass("present");
    }
    else if (currentHour < 9) {
        $("#9").addClass("future");
    }
        
    if (currentHour > 10) {
        $("#10").addClass("past");
    }
    else if (currentHour >=10 && currentHour < 11) {
        $("#10").addClass("present");
    }
    else if (currentHour < 10) {
        $("#10").addClass("future");
    }
    
    if (currentHour > 11) {
        $("#11").addClass("past");
    }
    else if (currentHour >=11 && currentHour < 12) {
        $("#11").addClass("present");
    }
    else if (currentHour < 11) {
        $("#11").addClass("future");
    }
        
    if (currentHour > 12) {
        $("#12").addClass("past");
    }
    else if (currentHour >=12 && currentHour < 13) {
        $("#12").addClass("present");
    }
    else if (currentHour < 12) {
        $("#12").addClass("future");
    }
    
    if (currentHour > 13) {
        $("#13").addClass("past");
    }
    else if (currentHour >=13 && currentHour < 14) {
        $("#13").addClass("present");
    }
    else if (currentHour < 13) {
        $("#13").addClass("future");
    }
    
    if (currentHour > 14) {
        $("#14").addClass("past");
    }
    else if (currentHour >=14 && currentHour < 15) {
        $("#14").addClass("present");
    }
    else if (currentHour < 14) {
        $("#14").addClass("future");
    }
    
    if (currentHour > 15) {
        $("#15").addClass("past");
    }
    else if (currentHour >=15 && currentHour < 16) {
        $("#15").addClass("present");
    }
    else if (currentHour < 15) {
        $("#15").addClass("future");
    }
    
    if (currentHour > 16) {
        $("#16").addClass("past");
    }
    else if (currentHour >=16 && currentHour < 17) {
        $("#16").addClass("present");
    }
    else if (currentHour < 16) {
        $("#16").addClass("future");
    }
    
    if (currentHour > 17) {
        $("#17").addClass("past");
    }
    else if (currentHour >=17 && currentHour < 18) {
        $("#17").addClass("present");
    }
    else if (currentHour < 17) {
        $("#17").addClass("future");
    }
    
    if (currentHour > 18) {
        $("#18").addClass("past");
    }
    else if (currentHour >=18 && currentHour < 19) {
        $("#18").addClass("present");
    }
    else if (currentHour < 18) {
        $("#18").addClass("future");
    }
}
})