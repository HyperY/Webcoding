/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. 
In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function () {
    //It contains the list of courses that are under the "bwu" programme
    var bwuCourseList = courses["bwu"];

    //a <ul></ul> is created to store the list of courses
    var unorderedList = document.createElement("ul");

    var coursePos;
    //loop executes as many times as items contains the list of courses under the "bwu" programme.
    for (coursePos = 0; coursePos < bwuCourseList.length; coursePos++) {
        //The list item will contain the course that is in position "coursePos"
        //<li></li>
        var listItem = document.createElement("li");
        /*e.g in position 0:  
        {
            code: "IDG1292",
            name: "web coding",
            description: "This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).",
            level: 1
        }
        */
        var currentCourse = bwuCourseList[coursePos];

        //currentCourse.code -> "IDG1292"
        //currentCourse.name -> "web coding"
        //currentCourse.description -> "This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization)."
        //currentCourse.level -> 1
        /*
            The folliwing code concatenates strings as explained in previous lectures.  
            However, in ES2015 (aka ES6) a new way to declare strings, 
            known as template literals, was introduced. 
            Right below the commented code you will find the equivalent version using template literals.
        */
        //Traditional way of concatenating strings
        /*
        listItem.innerHTML = "Course[" + coursePos + "] => " 
                                 + currentCourse.name + ": " + currentCourse.description 
                                 + ". " + currentCourse.level;
        */

        //new way of concatenating strings (template literals, ES2015)
        listItem.innerHTML = `
            Course[${coursePos}] => ${currentCourse.code} - ${currentCourse.name}: ${currentCourse.description} . LEVEL ${currentCourse.level}
        `;

        //<ul>
        //   <li>Course[0] => Course[0] => IDG1292 - web coding: This course introduces students... LEVEL 1</li>
        //</ul>
        unorderedList.appendChild(listItem);
    }
    document.body.appendChild(unorderedList);
})();