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
var starsopacity = 0;

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
    if (starsopacity !== 0.25){
        addstars1();
    }
   
    sunrisebtn.style.backgroundColor = "black";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";

    function suntoeast() {

    }
}
function setnoon() {
    if (midnightopacity !== 0){
        removemidnight();
    } 
    if (sunsetopacity !== 0){
        removesunset();
    }
    if (starsopacity !== 0){
        removestars();
    }
    if (noonopacity !== 1){
        addnoon();
    }

       
    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "black";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";

    function suntonorth() {

    }
}
function setsunset() {
    if (midnightopacity !== 0){
        removemidnight();
    }
    if (starsopacity !== 0){
        removestars();
    }
    if (sunsetopacity !== 1){
        addsunset();
    }
 
    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "black";
    midnightbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";

    function suntowest() {

    }
}
function setmidnight() {
    if (midnightopacity !== 1){
        addmidnight();
    }
    if (starsopacity !== 1){
        addstars2();
    }

    sunrisebtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    noonbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    sunsetbtn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    midnightbtn.style.backgroundColor = "black";

    function sunfade() {

    }
}

function removenoon() {
    let id = null;

    clearInterval(id);
    id = setInterval(change1a, 6);
    function change1a() {
        if (noonopacity<=0){
            clearInterval(id);
        } else {
            noonopacity = noonopacity-0.05;
            noonbg.style.backgroundImage = "linear-gradient(rgb(111, 178, 255, "+ noonopacity +"), rgb(135, 191, 255, "+ noonopacity +"), rgb(187, 228, 255, "+ noonopacity +"))";
        }
    }
}
function addnoon() {
    let id = null;

    clearInterval(id);
    id = setInterval(change1b, 6);
    function change1b() {
        if (noonopacity>=1){
            clearInterval(id);
        } else {
            noonopacity = noonopacity+0.05;
            noonbg.style.backgroundImage = "linear-gradient(rgb(111, 178, 255, "+ noonopacity +"), rgb(135, 191, 255, "+ noonopacity +"), rgb(187, 228, 255, "+ noonopacity +"))";
        }
    }
}

function removesunset() {
    let id = null;

    clearInterval(id);
    id = setInterval(change2a, 6);
    function change2a() {
        if (sunsetopacity<=0){
            clearInterval(id);
        } else {
            sunsetopacity = sunsetopacity-0.05;
            sunsetbg.style.backgroundImage = "linear-gradient(rgb(193, 128, 196, "+ sunsetopacity +"), rgb(176, 155, 185, "+ sunsetopacity +"), rgb(230, 177, 114, "+ sunsetopacity +"), antiquewhite)";
        }
    }
}
function addsunset() {
    let id = null;

    clearInterval(id);
    id = setInterval(change2b, 6);
    function change2b() {
        if (sunsetopacity>=1){
            clearInterval(id);
        } else {
            sunsetopacity = sunsetopacity+0.05;
            sunsetbg.style.backgroundImage = "linear-gradient(rgb(193, 128, 196, "+ sunsetopacity +"), rgb(176, 155, 185, "+ sunsetopacity +"), rgb(230, 177, 114, "+ sunsetopacity +"), antiquewhite)";
        }
    }
}

function removemidnight() {
    let id = null;

    clearInterval(id);
    id = setInterval(change3a, 6);
    function change3a() {
        if (midnightopacity<=0){
            clearInterval(id);
        } else {
            midnightopacity = midnightopacity-0.05;
            midnightbg.style.backgroundImage = "linear-gradient(rgb(13, 7, 54, "+ midnightopacity +"), rgb(46, 40, 111, "+ midnightopacity +"), rgb(50, 48, 106, "+ midnightopacity +"), antiquewhite)";
        }
    }
}
function addmidnight() {
    let id = null;

    clearInterval(id);
    id = setInterval(change3b, 6);
    function change3b() {
        if (midnightopacity>=1){
            clearInterval(id);
        } else {
            midnightopacity = midnightopacity+0.05;
            midnightbg.style.backgroundImage = "linear-gradient(rgb(13, 7, 54, "+ midnightopacity +"), rgb(46, 40, 111, "+ midnightopacity +"), rgb(50, 48, 106, "+ midnightopacity +"), antiquewhite)";
        }
    }
}

function removestars() {
    let id = null;

    if (starsopacity !== 0){
        clearInterval(id);
        id = setInterval(change4a, 6);
        function change4a() {
            if (starsopacity<=0){
                clearInterval(id);
            } else {
                starsopacity = starsopacity-0.05;
                document.getElementById("stars").style.opacity = starsopacity;
            }
        }
    }  
}
function addstars1(){
    let id = null;

    clearInterval(id);
    id = setInterval(change4b, 6);
    function change4b() {
        if (starsopacity>=0.25){
            clearInterval(id);
        } else {
            starsopacity = starsopacity+0.05;
            document.getElementById("stars").style.opacity = starsopacity;
        }
    }
}
function addstars2(){
    let id = null;

    clearInterval(id);
    id = setInterval(change4c, 6);
    function change4c() {
        if (starsopacity>=1){
            clearInterval(id);
        } else {
            starsopacity = starsopacity+0.05;
            document.getElementById("stars").style.opacity = starsopacity;
        }
    }
}
