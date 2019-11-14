/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. 
In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function() {

    //HELPERS contains an object with the "getHTMLCourseFromCodeNameDescriptionLevel" function
    var helpers = HELPERS();
    //console.log(helpers);

    //Compare this example with the example 2.
    var bwuCourses = courses["bwu"];
    var i;
    for(i = 0; i < bwuCourses.length; i++){
        var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bwuCourses[i].code, bwuCourses[i].name, bwuCourses[i].description, bwuCourses[i].level);
        document.body.appendChild(courseItem);
    }
})();