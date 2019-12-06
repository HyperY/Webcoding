// console.log(courses["bwu"]);

function bwu() {
    var helpers = HELPERS();
    var bwuCourses = courses["bwu"];
    
    for(var i = 0; i < bwuCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bwuCourses[i].code, bwuCourses[i].name, bwuCourses[i].description, bwuCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function bixd() {
    var helpers = HELPERS();
    var bixdCourses = courses["bixd"];

    for(var i = 0; i < bixdCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bixdCourses[i].code, bixdCourses[i].name, bixdCourses[i].description, bixdCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function bmed() {
    var helpers = HELPERS();
    var bmedCourses = courses["bmed"];

    for(var i = 0; i < bmedCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bmedCourses[i].code, bmedCourses[i].name, bmedCourses[i].description, bmedCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function arweb() {
    var helpers = HELPERS();
    var arwebCourses = courses["arweb"];

    for(var i = 0; i < arwebCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(arwebCourses[i].code, arwebCourses[i].name, arwebCourses[i].description, arwebCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}

function mixd() {
    var helpers = HELPERS();
    var mixdCourses = courses["mixd"];

    for(var i = 0; i < mixdCourses.length; i++) {
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(mixdCourses[i].code, mixdCourses[i].name, mixdCourses[i].description, mixdCourses[i].level);
        document.getElementById("course").appendChild(courseItem);
    }
}