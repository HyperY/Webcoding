/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. 
In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function() {

    //HELPERS contains an object with the "getHTMLCourseFromCodeNameDescriptionLevel" function
    var helpers = HELPERS();

    //your code goes here...
    //loop for "courses["bwu"] and use helpers inside loop to:
    //  a) get the div: var courseItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(bwuCourses[i].code,...
    //  b) add the div to the body...
    //console.log(helpers);

})();