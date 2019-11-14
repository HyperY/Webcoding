/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an anonymous function that is executed when the file is loaded. 
In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
//console.log(programmes);
(function showProgrammes() {
    //your code goes here...
    // a) loop for "programmes". Use programmes.length to know the number of elements of this list.
    // b) inside the loop document.createElement("p") (and save it in a variable)
    // c) use the innerHTML too add the text (acronym of the programme). This is, programmes[i]
    // c) use appendChild to add the previous element to the body
    console.log(programmes.length);
    var programme;
    for(programme = 0; programme < programmes.length; programme++){
        console.log('programme ' + programmes);
        var p = document.createElement("p");
        p.innerHTML = programmes[programme];
        document.body.appendChild(p);
    }
})();