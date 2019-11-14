/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function () {
    //It contains the list of courses that are under the "bwu" programme
    var webCodingCourse = courses["bwu"][0];
    var courseCode = webCodingCourse.code;
    var courseName = webCodingCourse.name;
    var courseDescription = webCodingCourse.description;
    var courseLevel = webCodingCourse.level;

    // your code goes here... 
    // (HINT: you can "borrow some text or ideas from 
    // the helpers file...")
    var divCourse = document.createElement("div");
    divCourse.className = "course-item";

    var htmlTitle = getTitleElement(courseName, courseCode);
    divCourse.appendChild(htmlTitle);

    var paragraphWithDescriptionAndLevel = getParagraphWithDescriptionAndLevel(courseDescription, courseLevel);
    divCourse.appendChild(paragraphWithDescriptionAndLevel);
    document.body.appendChild(divCourse);

    function getTitleElement(name, code) {
        var titleH2 = document.createElement("h2");
        titleH2.innerHTML = code + " - " + name;
        return titleH2;
    }

    function getDescriptionElement(description) {
        var descSpan = document.createElement("span");
        descSpan.innerHTML = description;
        return descSpan;
    }

    function getLevelElement(level) {
        var levelSpan = document.createElement("span");
        levelSpan.innerHTML = "Level: " + level;
        levelSpan.className = "level";
        return levelSpan;
    }

    function getParagraphWithDescriptionAndLevel(description, level) {
        var p = document.createElement("p");
        var htmlDesc = getDescriptionElement(description);
        p.appendChild(htmlDesc);
        var htmlLevel = getLevelElement(level);
        p.appendChild(htmlLevel);
        return p;
    }
})();