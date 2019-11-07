var birthYear = 2001;
var year = 2019;
var age = year-birthYear;
var legalAge = 18;

console.log("Input data");
console.log("----------");
console.log("  +birthYear: " + birthYear);
console.log("  +year: " + year);
console.log("calculating your age...");
console.log("You are " + age + " years old");

if(age>=18){
    console.log("Congratulations! You are of legal age");
}
else {
    var diff = legalAge - age;
    console.log("Sorry, no beer for you. You have to wait " + diff + " years to be of legal age...");    
}

var factorial = 1;
for (var i = age; i > 1; i--) {
    factorial *= i;
}
console.log("The factorial of your age is: " + factorial);

//Ex4
var letter = prompt("Please, enter your letter");
var text = prompt("Please, enter a text");
var counter = 0;
for(var index = 0; index < text.length; index++){
    if(text[index] == letter){
        counter++;
    }
}
alert("Your text contains " + counter + " '" + letter + "'");