/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. 
In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function showCourses() {
    //your code goes here...
    //a) create loop for going through courses["bwu"].
    //   With courses["bwu"].length you will know the number of elements of this list.
    //b) don't forget to add the elements created to the body (append...)
    var bwuCourseList = courses["bwu"];
    var unorderedList = document.createElement("ul");
    var coursePos;
    for (coursePos = 0; coursePos < bwuCourseList.length; coursePos++) {
        var listItem = document.createElement("li");
        var currentCourse = bwuCourseList[coursePos];
        listItem.innerHTML = `
            Course[${coursePos}] => ${currentCourse.code} - ${currentCourse.name}: ${currentCourse.description} . LEVEL ${currentCourse.level}`;
            unorderedList.appendChild(listItem);
    }
    document.body.appendChild(unorderedList);
})();