/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an anonymous function that is executed when the file is loaded. 
In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function() {
    console.log(programmes.length);
    var programmePos;
    // Loop that iterates all the elements of the programmes array
    for(programmePos = 0; programmePos < programmes.length; programmePos++){
        console.log('programmePos' + programmePos);
        // Create a new document
        var newP = document.createElement("p");
        // Fill the new element (<p></p>) with 
        // some content (i.e. the name of the programme)
        newP.innerHTML = programmes[programmePos];
        // Add the new <p> inside the document.
        document.body.appendChild(newP);
    }
})();