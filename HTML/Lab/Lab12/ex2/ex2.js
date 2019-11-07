/* 
Create your js code here.
Make sure this file is linked in your html file.
Remember that it is a good practice to include your
scripts at the end of the body
*/

/*
The following code is an example for you. 
Notice that the categories and iceCreams variables are available here 
because the ex2.html is loading the menu-db.js file first.
*/ 

//REMOVE CODE FROM HERE
console.log("...Executing ex2.js file");
console.log("........................");
console.log("");
console.log("Ice cream categories:");
console.log(categories);
console.log("All the ice creams grouped by category:")
console.log(iceCreams);
console.log("The first ice cream under the 'ice cream' category:")
console.log("--Name: " + iceCreams["ice creams"][0].name);
console.log("--Description: " + iceCreams["ice creams"][0].description);
console.log("--Price: " + iceCreams["ice creams"][0].price + "NOK");
//END REMOVE

//Your implementation goes here