function count(onclick){
    let letter = document.getElementById("letter").value;
    let text = document.getElementById("text").value;
    let counter = 0;

    for(let index = 0; index < text.length; index++){
        if(text[index] == letter){
            counter++;
        } 
    }
    document.getElementById("submit").innerHTML = counter;
}

function count1(onclick){
    let letter1 = document.getElementById("letter1").value;
    let text1 = document.getElementById("text1").value;
    let counter1 = 0;

    for(var i = 0; i < text1.length; i++){
        if(text[i] == letter1){
            counter1++;
        }
    }

    //var p = document.createElement('p');
    //var element = "There is a total of" + counter1 + " " + letter1 + " in your text.";
    //p.appendChild(element);
    console.log(counter1);
}
    