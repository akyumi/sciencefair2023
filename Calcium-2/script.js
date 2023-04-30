const sunrisebtn = document.getElementById("05:30");
const noonbtn = document.getElementById("12:00");
const sunsetbtn = document.getElementById("17:30");
const midnightbtn = document.getElementById("00:00");

const sunrisebg = document.getElementById("bg-wrapper-sunrise");
const noonbg = document.getElementById("bg-wrapper-noon");
const sunsetbg = document.getElementById("bg-wrapper-sunset");
const midnightbg = document.getElementById("bg-wrapper-midnight");

var noonopacity = 1;
var sunsetopacity = 0;
var midnightopacity = 0;


function setsunrise() {
    if (midnightopacity !== 0){
        removemidnight();
    } 
    if (sunsetopacity !== 0){
        removesunset();
    }
    if (noonopacity !== 0){
        removenoon();
    }
   
    sunrisebtn.style.backgroundColor = "black";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
}
function setnoon() {
    if (midnightopacity !== 0){
        removemidnight();
    } 
    if (sunsetopacity !== 0){
        removesunset();
    }
    if (noonopacity !== 1){
        addnoon();
    }
       
    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "black";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
}
function setsunset() {
    if (midnightopacity !== 0){
        removemidnight();
    } 
    if (sunsetopacity !== 1){
        addsunset();
    }
 
    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "black";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
}
function setmidnight() {
    if (midnightopacity !== 1){
        addmidnight();
    }

    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "black";
}

function removenoon() {
    let id = null;

    clearInterval(id);
    id = setInterval(change1a, 4);
    function change1a() {
        if (noonopacity<=0){
            clearInterval(id);
        } else {
            noonopacity = noonopacity-0.05;
            noonbg.style.backgroundImage = "linear-gradient(rgb(96, 170, 255, "+ noonopacity +"), rgb(135, 191, 255, "+ noonopacity +"), rgb(187, 228, 255, "+ noonopacity +"))";
        }
    }
}
function addnoon() {
    let id = null;

    clearInterval(id);
    id = setInterval(change1b, 4);
    function change1b() {
        if (noonopacity>=1){
            clearInterval(id);
        } else {
            noonopacity = noonopacity+0.05;
            noonbg.style.backgroundImage = "linear-gradient(rgb(96, 170, 255, "+ noonopacity +"), rgb(135, 191, 255, "+ noonopacity +"), rgb(187, 228, 255, "+ noonopacity +"))";
        }
    }
}

function removesunset() {
    let id = null;

    clearInterval(id);
    id = setInterval(change2a, 4);
    function change2a() {
        if (sunsetopacity<=0){
            clearInterval(id);
        } else {
            sunsetopacity = sunsetopacity-0.05;
            sunsetbg.style.backgroundImage = "linear-gradient(rgb(193, 128, 196, "+ sunsetopacity +"), rgb(176, 155, 185, "+ sunsetopacity +"), rgb(230, 177, 114, "+ sunsetopacity +"))";
        }
    }
}
function addsunset() {
    let id = null;

    clearInterval(id);
    id = setInterval(change2b, 4);
    function change2b() {
        if (sunsetopacity>=1){
            clearInterval(id);
        } else {
            sunsetopacity = sunsetopacity+0.05;
            sunsetbg.style.backgroundImage = "linear-gradient(rgb(193, 128, 196, "+ sunsetopacity +"), rgb(176, 155, 185, "+ sunsetopacity +"), rgb(230, 177, 114, "+ sunsetopacity +"))";
        }
    }
}

function removemidnight() {
    let id = null;

    clearInterval(id);
    id = setInterval(change3a, 5);
    function change3a() {
        if (midnightopacity<=0){
            clearInterval(id);
        } else {
            midnightopacity = midnightopacity-0.05;
            midnightbg.style.backgroundImage = "linear-gradient(rgb(13, 9, 45, "+ midnightopacity +"), rgb(33, 28, 70, "+ midnightopacity +"), rgb(50, 48, 106, "+ midnightopacity +"))";
        }
    }
}
function addmidnight() {
    let id = null;

    clearInterval(id);
    id = setInterval(change3b, 4);
    function change3b() {
        if (midnightopacity>=1){
            clearInterval(id);
        } else {
            midnightopacity = midnightopacity+0.05;
            midnightbg.style.backgroundImage = "linear-gradient(rgb(13, 9, 45, "+ midnightopacity +"), rgb(33, 28, 70, "+ midnightopacity +"), rgb(50, 48, 106, "+ midnightopacity +"))";
        }
    }
}
