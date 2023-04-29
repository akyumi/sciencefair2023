var sunrisebtn = document.getElementById("05:30");
var noonbtn = document.getElementById("12:00");
var sunsetbtn = document.getElementById("17:30");
var midnightbtn = document.getElementById("00:00");

function setsunrise() {
    document.getElementById("container1").className = "sunrise";
   
    sunrisebtn.style.backgroundColor = "black";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
}
function setnoon() {
    document.getElementById("container1").className = "noon";
   
    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "black";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
}
function setsunset() {
    document.getElementById("container1").className = "sunset";
 
    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "black";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
}
function setmidnight() {
    document.getElementById("container1").className = "midnight";

    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "black";
}
