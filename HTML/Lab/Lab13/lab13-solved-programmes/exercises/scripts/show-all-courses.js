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

    var i, j;
    //loop to go through all the programmes
    for (i = 0; i < programmes.length; i++) {
        //For each programme, we create a <h2> with the programme acronym
        //and it is added to the body
        var h2 = document.createElement("h2");
        h2.innerHTML = programmes[i];
        document.getElementById(idContainer).appendChild(h2);

        //loop to go through all the courses that belong to programme[i] (i.e, the current programme)
        var currentCourses = courses[programmes[i]];
        for (j = 0; j < currentCourses.length; j++) {
            //for each menu, a html div with the name, description and level is created and it is added to the body.
            var menuItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(currentCourses[j].code, currentCourses[j].name, currentCourses[j].description, currentCourses[j].level);
            document.getElementById(idContainer).appendChild(menuItem);
        }
    }
})();