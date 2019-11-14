/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. 
In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function () {
    var helpers = HELPERS();
    //This will be the name of the container where the "html" code will be added
    var idContainer = "programmes-container";

    //Your code goes here...
    //You need to create a loop to go through all the programmes
    //and inside this loop, you will need another loop to go through
    //all the courses...
    var i, j;
    for(i = 0; i < programmes.length; i++){
        var h2 = document.createElement("h2");
        h2.innerHTML = programmes[i];
        document.getElementById(idContainer).appendChild(h2);

        var currentCourses = courses[programmes[i]];
        for(j = 0; j < currentCourses.length; j++) {
            var menuItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(currentCourses[j].code, currentCourses[j].name, currentCourses[j].description, currentCourses[j].level);
            document.getElementById(idContainer).appendChild(menuItem);
        }
    }
})();