// Gives date on application page
const date = new Date();

let [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day; 

const today = year + "-" + month + "-" + day;

document.getElementById("theDate").value = today;
document.getElementById("theDate").setAttribute("min", today);

// Checking time and day constraints
function checkDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = document.getElementById("theDate").value;
    const [theYear, theMonth, theDay] = date.split("-");
    const checkDay = new Date(`${months[theMonth-1]} ${theDay}, ${theYear} 00:00:00`).getDay();

    if (checkDay === 5) {
        document.getElementById("theTime").setAttribute("max", "15:00");
        document.getElementById("stopped").disabled = false;
        document.getElementById("theTime").disabled = false;
    }

    else if (checkDay === 6 || checkDay === 0) {
        document.getElementById("theTime").disabled = true;
        document.getElementById("stopped").disabled = true;
        //alert("Please pick a date within our opening times!")
    }

    else {
        document.getElementById("stopped").disabled = false;
        document.getElementById("theTime").disabled = false;
        document.getElementById("theTime").setAttribute("max", "16:00");
    }
}

checkDate();