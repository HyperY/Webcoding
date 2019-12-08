// Functions to display courses in programmes page
// console.log(courses["bwu"]);

function allCourses() {
    var helpers = HELPERS();
    var idContainer = "course";
    document.getElementById("course").innerHTML = "";

    var i, j;
    for(i = 0; i < programmes.length; i++) {
        var h2 = document.createElement("h2");
        h2.innerHTML = programmes[i];
        document.getElementById(idContainer).appendChild(h2);

        var currentCourses = courses[programmes[i]];
        for(j = 0; j < currentCourses.length; j++) {
            var menuItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(currentCourses[j].code, currentCourses[j].name, currentCourses[j].description, currentCourses[j].level);
            document.getElementById(idContainer).appendChild(menuItem);
        }
    }
}

function bwu() {
    var helpers = HELPERS();
    var bwuCourses = courses["bwu"];
    document.getElementById("course").innerHTML = "";
    
    for(var i = 0; i < bwuCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bwuCourses[i].code, bwuCourses[i].name, bwuCourses[i].description, bwuCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function bixd() {
    var helpers = HELPERS();
    var bixdCourses = courses["bixd"];
    document.getElementById("course").innerHTML = "";

    for(var i = 0; i < bixdCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bixdCourses[i].code, bixdCourses[i].name, bixdCourses[i].description, bixdCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function bmed() {
    var helpers = HELPERS();
    var bmedCourses = courses["bmed"];
    document.getElementById("course").innerHTML = "";

    for(var i = 0; i < bmedCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bmedCourses[i].code, bmedCourses[i].name, bmedCourses[i].description, bmedCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function arweb() {
    var helpers = HELPERS();
    var arwebCourses = courses["arweb"];
    document.getElementById("course").innerHTML = "";

    for(var i = 0; i < arwebCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(arwebCourses[i].code, arwebCourses[i].name, arwebCourses[i].description, arwebCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function mixd() {
    var helpers = HELPERS();
    var mixdCourses = courses["mixd"];
    document.getElementById("course").innerHTML = "";

    for(var i = 0; i < mixdCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(mixdCourses[i].code, mixdCourses[i].name, mixdCourses[i].description, mixdCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function clearArea() {
    document.getElementById("course").innerHTML = "";
}

// Gives date on application page
const date = new Date();

let [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day; 

const today = year + "-" + month + "-" + day;

document.getElementById('theDate').value = today;
document.getElementById('theDate').setAttribute("min", today);

// Checking time and day constraints
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function checkDate() {
    const date = document.getElementById("theDate").value;
    const [theYear, theMonth, theDay] = date.split("-");
    const checkDay = new Date(`${months[theMonth-1]} ${theDay}, ${theYear} 00:00:00`).getDay();

    if (checkDay === 5) {
        document.getElementById("theTime").setAttribute("max", "15:00");
    }

    else if (checkDay === 6, 7) {
        document.getElementById("theTime").setAttribute(none);
    }

    else {
        document.getElementById("theTime").setAttribute("max", "16:00");
    }
}

checkDate();