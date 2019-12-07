
//This array contains the list of all the programmes in which the courses are grouped
//notice that all the names are lowercase. If you want to display them into your page, you can use 
//CSS rules to capitalize or uppercase...
var programmes = [
    "bwu",
    "bixd",
    "bmed",
    "arweb",
    "mixd"
];

//The courses variable contain a lists indexed by the programme name. 
//In other words, this is a list of lists.
//E.g. To get the first course from the "bwu" programme you will do:
//   courses["bwu"][0]
var courses = [];

//Courses under "BWU" programme
//For example, if you want to get the name of the first course you can use the following syntax:
//  courses["bwu"][0].name
//  The previous expression will return "Web Coding"
courses["bwu"] = [
    {
        code: "IDG1292",
        name: "web coding",
        description: "This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).",
        level: 1
    },
    {
        code: "IDG1100",
        name: "basic web development",
        description: "The goal of this course is to introduce the students to the discipline of web development and its fundamental history, methods, prinsciples and a selection of its tools.",
        level: 1
    },
    {
        code: "IDG1000",
        name: "graphic tools, principles and methods",
        description: "The course will give students a fundamental introduction to central tools, principles and methods for graphic design on a variety of screens such as TVs, smartphones and tablets. The course includes numerous practical exercises and the student is expected to demonstrate responsibility for independent learning and development throughout the semester.",
        level: 1
    },
    {
        code: "IDG1362",
        name: "design thinking",
        description: "The core of this course is to introduce the students for Design Thinking and they will learn to use it by identifying a problem or a need in a software interface for a defined group of users. The students wil then develop suggested solutions through using creative techniques and make sketches and prototypes and in a systematic way, test these solutions on the primary users of the software.",
        level: 1
    },
    {
        code: "IDG1362",
        name: "design thinking",
        description: "The core of this course is to introduce the students for Design Thinking and they will learn to use it by identifying a problem or a need in a software interface for a defined group of users. The students wil then develop suggested solutions through using creative techniques and make sketches and prototypes and in a systematic way, test these solutions on the primary users of the software.",
        level: 1
    },
    {
        code: "IDG3100",
        name: "in-depth project in web development",
        description: "The students choose a topic and develop a personal project either individually or in groups. The topic must represent a challenge within the specific area of study and it must require that the student adheres to practices that are common within the area.",
        level: 3
    },
    {
        code: "IDG2001",
        name: "cloud technologies",
        description: "The field of cloud computing and cloud technologies is dynamic. It changes rapidly. There are some fundamental concepts that stay relatively unchanged, and there is an innovation in tools and technologies that often change. Due to those characteristics, the course lectures are subject to change, based on contemporary market adjustments.",
        level: 2
    }
];

//Courses under "BIXD" category
courses["bixd"] = [
    {
        code: "HMS0004",
        name: "health, safety and environment",
        description: "The course focuses on HSE (health, safety and environment) for students and gives an introduction to risks associated with the use of workshop machinery as well as routines and handling of tools at construction sites.",
        level: 1
    },
    {
        code: "IDG1000",
        name: "graphic tools, principles and methods",
        description: "The course will give students a fundamental introduction to central tools, principles and methods for graphic design on a variety of screens such as TVs, smartphones and tablets. The course includes numerous practical exercises and the student is expected to demonstrate responsibility for independent learning and development throughout the semester.",
        level: 1
    },
    {
        code: "IDG1000",
        name: "graphic tools, principles and methods",
        description: "The course will give students a fundamental introduction to central tools, principles and methods for graphic design on a variety of screens such as TVs, smartphones and tablets. The course includes numerous practical exercises and the student is expected to demonstrate responsibility for independent learning and development throughout the semester.",
        level: 1
    },
    {
        code: "IDG1006",
        name: "physical and tangible interaction design",
        description: "Analysis and design of interaction as a material (emergence, playability, physical, tangible and sensory qualities).",
        level: 1
    },
    {
        code: "IDG3541",
        name: "design practice",
        description: "The student is connected with a workplace for a total of 270 hours during a semester. During this period, students will participate in production, familiarize themselves with the organization, and apply all the theoretical knowledge and practical skills acquired during the first four semesters of the course.",
        level: 3
    },
    {
        code: "IDG2200",
        name: "design and prototyping for smart phone and tablets",
        description: "The student is connected with a workplace for a total of 270 hours during a semester. During this period, students will participate in production, familiarize themselves with the organization, and apply all the theoretical knowledge and practical skills acquired during the first four semesters of the course.",
        level: 2
    }
];

//Courses under "bmed" programme
courses["bmed"] = [
    {
        code: "IDG1101",
        name: "typography 1",
        description: "After completion of the course, the student will be in command of standard typographic terminology (Norwegian and English) and hold a basic theoretical and practical knowledge of punctuation, hyphenation & justification, microtypography, typefaces, basic principles of typographic design, page layout, and page makeup.",
        level: 1
    },
    {
        code: "IDG1112",
        name: "history of photography and pictorial communication",
        description: "The course will give the students knowledge of the general history of photography, a history of photographic reproduction technology, and the role of photography in modern graphic design. The course also has a hermeneutic approach where the students have to make themselves acquainted with critical theory that questions the properties of the published / mass produced photograph as a communicative medium.",
        level: 1
    },
    {
        code: "IDG1072",
        name: "ergonomics in digital media",
        description: "Human-centered technology,Usability principles,Human memory and information processing,Knowledge in the head, in the body, in the user inteface, in the world,Metaphors and idioms,Information structure and navigation,Standards and guidelines in usability engineering,The life cycle of usability engineering,Personas,Scenario techniques,Rapid prototyping,Formative-iterative usability testing,Heuristic evaluation and expert evaluation,Universal design.",
        level: 1
    },
    {
        code: "IDG1292",
        name: "web coding",
        description: "This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).",
        level: 1
    },
    {
        code: "IDG2312",
        name: "history of typography",
        description: "History of type and typography in a societal perspective, with a special emphasis on innovations and developments in type design, typography, printed artefact genres and printing technology in the 19th century.",
        level: 2
    },
    {
        code: "IDG3009",
        name: "information architecture",
        description: "The student shall be able to use user centered methods and methods for iterative prototyping to develop and present information architecture for web and mobile. The students shall be able to account for different principles and traditions to establish user centered information categories and sort them, and design access structures and navigational devices and search strategies.",
        level: 3
    }
];

//courses under "arweb" programme
courses["arweb"] = [
    {
        code: "IDG1292",
        name: "web coding",
        description: "This course introduces students to basic web design using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). The course will not only present the main building blocks of web development, but it will also discuss how to create a project from scratch following the standards and implementing good practices to make the pages as readable as possible for both humans (Universal Design and Web Accessibility) and robots (Search Engine Optimization).",
        level: 1
    },
    {
        code: "IDG1100",
        name: "basic web development",
        description: "The goal of this course is to introduce the students to the discipline of web development and its fundamental history, methods, prinsciples and a selection of its tools.",
        level: 1
    },
    {
        code: "IDG1000",
        name: "graphic tools, principles and methods",
        description: "The course will give students a fundamental introduction to central tools, principles and methods for graphic design on a variety of screens such as TVs, smartphones and tablets. The course includes numerous practical exercises and the student is expected to demonstrate responsibility for independent learning and development throughout the semester.",
        level: 1
    },
    {
        code: "IDG1362",
        name: "design thinking",
        description: "The core of this course is to introduce the students for Design Thinking and they will learn to use it by identifying a problem or a need in a software interface for a defined group of users. The students wil then develop suggested solutions through using creative techniques and make sketches and prototypes and in a systematic way, test these solutions on the primary users of the software.",
        level: 1
    }
];

//courses under "mixd" programme
courses["mixd"] = [
    {
        code: "IMT4110",
        name: "scientific methodology and communication",
        description: "Introduction to the theory of science, Characteristics of good research, Research ethics, Research as a means of systematic progress, Quantitative and qualitative research designs, Characteristics of good research topics and how to create one, Literature studies, Choice of methods,  including planning and how to carry out and analyze experiments/studies, Use of research databases for problem solving, Data analysis and statistics.",
        level: 4
    },
    {
        code: "IMT4316",
        name: "user-centred information architecture",
        description: "Categorization, labeling, navigation, search.",
        level: 4
    },
    {
        code: "IDG4112",
        name: "tangible interaction design for health promotion",
        description: "Co-creation and physical and visual sketching with diverse persons, users, etc., Tangible Interaction Design through prototyping, Design as Research, Research-by-Design, reflection in action, Culture based design, Design based on principles in Health Promotion (World Health Organisation) and Universal Design, Human Centred Design.",
        level: 4
    },
    {
        code: "IDG1362",
        name: "master's thesis",
        description: "The student must pick a specific problem of relevance to the master's program. The topic must represent a challenge within the specific area and must require that the student adheres to practices that are common within the area. The topic must be preapproved by the supervisor.",
        level: 5
    }
];
//REMOVE THIS AFTER CHECKING HOW IT WORKS
/*
console.log("Programmes:");
console.log(programmes);
console.log("All the courses grouped by programme:");
console.log(courses);
console.log("The first course under the 'bwu' programme:");
console.log("--Code:: " + courses["bwu"][0].code);
console.log("--Name:: " + courses["bwu"][0].name);
console.log("--Description: " + courses["bwu"][0].description);
console.log("--level: " + courses["bwu"][0].level);
*/
//End remove