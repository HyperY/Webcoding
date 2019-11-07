// The categories and iceCreams variables are available here 
// Because the ex2.html is loading the menu-db.js file first.
// REMOVE CODE FROM HERE
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

console.log("Exercise 2.1:");
console.log("-------------");
var i;
for (i = 0; i < categories.length; i++) {
    console.log("Category " + i + ": " + categories[i]);
}
console.log("End exercise 2.1");
console.log("");

console.log("Exercise 2.2:");
console.log("-------------");
var j, categoryName, currentIceCreamList, currentIceCreamElement;
for (i = 0; i < categories.length; i++) {
    categoryName = categories[i];
    currentIceCreamList = iceCreams[categoryName];
    console.log("#Category " + i + ": " + categoryName);
    for (var j = 0; j < currentIceCreamList.length; j++) {
        currentIceCreamElement = currentIceCreamList[j];
        console.log("Ice cream number " + j);
        console.log("   -> Name: " + currentIceCreamElement.name);
        console.log("   -> Description: " + currentIceCreamElement.description);
        console.log("   -> Price: " + currentIceCreamElement.price);
    }
    console.log("");
}

