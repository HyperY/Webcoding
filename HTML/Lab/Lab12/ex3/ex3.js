function count(onclick){
    let letter = document.getElementById("letter").value;
    let text = document.getElementById("text").value;
    let counter = 0;

    for(let index = 0; index < text.length; index++){
        if(text[index] == letter){
            counter++;
        } 
    }
    var output = ("There is a total of " + counter + " " + "'" + letter + "'" +" in your text.");
    document.getElementById("submit").innerHTML = output;
}

function count1(onclick){
    let letter1 = document.getElementById("letter1").value;
    let text1 = document.getElementById("text1").value;
    let counter1 = 0;

    for(var i = 0; i < text1.length; i++){
        if(text1[i] == letter1){
            counter1++;
        }
    }
    
    var p = document.createElement("P");
    var t = document.createTextNode("There is a total of " + counter1 + " " + "'" + letter1 + "'" +" in your text.");
    p.appendChild(t);
    document.body.appendChild(p);
    console.log(p);
}
    