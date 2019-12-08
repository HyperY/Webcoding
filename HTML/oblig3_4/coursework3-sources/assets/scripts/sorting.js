// Sorting programmes
function displaySubjects() {
    var helpers = HELPERS();

    var i, j;
    for (i = 0; i < programmes.length; i++) {
        var h2 = document.createElement("h2");
        h2.innerHTML = programmes[i];
        document.getElementById("course").appendChild(h2);

        var currentCourses = courses[programmes[i]];
        for (j = 0; j < currentCourses.length; j++) {
            var menuItem = helpers.getHTMLCourseFromCodeNameDescriptionLevel(currentCourses[j].code, currentCourses[j].name, currentCourses[j].description, currentCourses[j].level);
            document.getElementById("course").appendChild(menuItem);
        }
    }
};

displaySubjects();

function clearSubjects() {
    document.getElementById("course").innerHTML = "";
}

function lowLevel() {
    courses["bwu"].sort(function(a, b) {
        if (a.level < b.level) {return -1;}
        if (a.level > b.level) {return 1;}
    }
    )
    courses["bixd"].sort(function(a, b) {
        if (a.level < b.level) {return -1;}
        if (a.level > b.level) {return 1;}
    }
    )
    courses["bmed"].sort(function(a, b) {
        if (a.level < b.level) {return -1;}
        if (a.level > b.level) {return 1;}
    }
    )
    courses["arweb"].sort(function(a, b) {
        if (a.level < b.level) {return -1;}
        if (a.level > b.level) {return 1;}
    }
    )
    courses["mixd"].sort(function(a, b) {
        if (a.level < b.level) {return -1;}
        if (a.level > b.level) {return 1;}
    }
    )    

    clearSubjects();
    displaySubjects();
}

function highLevel(a, b) {
    courses["bwu"].sort(function(a, b) {
        if (a.level > b.level) {return -1;}
        if (a.level < b.level) {return 1;}
    }
    )
    courses["bixd"].sort(function(a, b) {
        if (a.level > b.level) {return -1;}
        if (a.level < b.level) {return 1;}
    }
    )
    courses["bmed"].sort(function(a, b) {
        if (a.level > b.level) {return -1;}
        if (a.level < b.level) {return 1;}
    }
    )
    courses["arweb"].sort(function(a, b) {
        if (a.level > b.level) {return -1;}
        if (a.level < b.level) {return 1;}
    }
    )
    courses["mixd"].sort(function(a, b) {
        if (a.level > b.level) {return -1;}
        if (a.level < b.level) {return 1;}
    }
    )
    clearSubjects();
    displaySubjects();
}

function AtoZ(a,b) {
    courses["bwu"].sort(function(a, b) {
        if (a.name < b.name) {return -1;}
        if (a.name > b.name) {return 1;}
    }
    )
    courses["bixd"].sort(function(a, b) {
        if (a.name < b.name) {return -1;}
        if (a.name > b.name) {return 1;}
    }
    )
    courses["bmed"].sort(function(a, b) {
        if (a.name < b.name) {return -1;}
        if (a.name > b.name) {return 1;}
    }
    )
    courses["arweb"].sort(function(a, b) {
        if (a.name < b.name) {return -1;}
        if (a.name > b.name) {return 1;}
    }
    )
    courses["mixd"].sort(function(a, b) {
        if (a.name < b.name) {return -1;}
        if (a.name > b.name) {return 1;}
    }
    )
    clearSubjects();
    displaySubjects();
}

function ZtoA(a,b) {
    courses["bwu"].sort(function(a, b) {
        if (a.name > b.name) {return -1;}
        if (a.name < b.name) {return 1;}
    }
    )
    courses["bixd"].sort(function(a, b) {
        if (a.name > b.name) {return -1;}
        if (a.name < b.name) {return 1;}
    }
    )
    courses["bmed"].sort(function(a, b) {
        if (a.name > b.name) {return -1;}
        if (a.name < b.name) {return 1;}
    }
    )
    courses["arweb"].sort(function(a, b) {
        if (a.name > b.name) {return -1;}
        if (a.name < b.name) {return 1;}
    }
    )
    courses["mixd"].sort(function(a, b) {
        if (a.name > b.name) {return -1;}
        if (a.name < b.name) {return 1;}
    }
    )
    clearSubjects();
    displaySubjects();
}