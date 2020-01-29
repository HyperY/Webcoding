function showDate() {
    var time = new Date();
    var weekday = new Array(7);
    weekday[0] = "søndag";
    weekday[1] = "mandag";
    weekday[2] = "tirsdag";
    weekday[3] = "onsdag";
    weekday[4] = "torsdag";
    weekday[5] = "fredag";
    weekday[6] = "lørdag";
    var today = weekday[time.getDay()];

    if(today == "onsdag" || today == "torsdag"){
        document.getElementById("morsomheter").innerHTML = "Dessverre har du Ex.Phil på en " + today + ".";
    }
    else {
        document.getElementById("morsomheter").innerHTML = "Du har heldigvis ikke Ex.Phil på en " + today + ".";
    }
}