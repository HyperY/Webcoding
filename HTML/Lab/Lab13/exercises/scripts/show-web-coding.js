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
})();