
//This array contains the list of all the categories in which the ice creams are divided
//notice that all the names are lowercase. If you want to display them into your page, you can use 
//CSS rules to capitalize or uppercase...
var categories = [
    "ice creams",
    "sundaes",
    "mousses",
    "smoothies"
];

//The iceCreams variable contain a lists indexed by the category name. 
//In other words, this is a list of lists.
//E.g. To get the first ice cream from the "plain ice cream" category you will do:
//   iceCreams["plain ice cream"][0]
var iceCreams = [];

//Ice creams under "ice cream" category
//For example, if you want to get the name of the first ice cream you can use the following syntax:
//  iceCreams["ice creams"][0].name
//  The previous expression will return "Bloody hell"
/*
 NOTE: if you already know javascript or you revisit this code in the future, 
 you will realise that "associative arrays" do not exist in js and, 
 therefore, iceCreams.lenght will return 0. For that reason I have created 2 different arrays,
 one with the categoryes and this one.
 Another way of looping all the categories of the "iceCreams" list is using the properties 
 of the list as a "key"

  for (var cat in iceCreams) {
   if (iceCreams.hasOwnProperty(key))
     console.log(iceCreams[key]);
  }

 or, in modern browsers, you can also use the Object.keys function like this:

  Object.keys(iceCreams).forEach(function(key, index) {
   console.log(index);
   console.log(key);
   console.log(this[key]);
  }, iceCreams);
*/
iceCreams["ice creams"] = [
    {
        name: "bloody hell",
        description: "Vanilla Ice Cream, Vanilla Wafers, and Strawberry Topping",
        level: 52
    },
    {
        name: "never sleep again",
        description: "Coffee flavored caffeinated ice cream",
        level: 48
    }, 
    {
        name: "camp crystal cake",
        description: "Cake batter ice cream with ch-ch-cherries and ah-ah-almonds",
        level: 42
    },
    {
        name: "klaatu banana nikto",
        description: "Vanilla Ice Cream, Bananas, and Pineapple Topping",
        level: 53
    }
];

//Ice creams under "sundaes" category
iceCreams["sundaes"] = [
    {
        name: "cookie monster",
        description: "Cookies ‘N Cream Ice Cream, Oreo Cookies, and Hot Fudge",
        level: 73
    },
    {
        name: "mocha madness",
        description: "Coffee Ice Cream, M&M’s, and Hot Fudge",
        level: 69
    }, 
    {
        name: "fruit killer",
        description: "Peach ice cream, Pineapple, banana, pear and Strawberry Topping",
        level: 65
    }
];

//Ice creams under "mousse" category
iceCreams["mousses"] = [
    {
        name: "brain mousse",
        description: "Vanilla Ice Cream, Reese’s Peanut Butter Cups, and Hershey’s Chocolate Syrup",
        level: 59
    },
    {
        name: "chocolate mousse graveyard",
        description: "Pretty little graveyards with creamy chocolate mousse oreo dirt and biscuit gravestones",
        level: 63
    }, 
    {
        name: "halloween party",
        description: "A layer of moist carrot cake, a layer of creamy chocolate mousse and a streak of refreshing orange gelee",
        level: 49
    }, 
    {
        name: "matchate kills again",
        description: "A matcha flavored mousse served with matcha ice cream and vanilla crunchies.",
        level: 72
    }, 
    {
        name: "halloween tombstones",
        description: "Rich creamy Belgian Chocolate mousse with gooey, salted caramel sauce",
        level: 51
    }, 
    {
        name: "haunted mickey mousse",
        description: "A circle of orange liqueur soaked sponge cake with layers of dark and white chocolate mousse coated with bloody syrup.",
        level: 57
    }
];

//Ice creams under "smoothies" category
iceCreams["smoothies"] = [
    {
        name: "Jack O'Lantern",
        description: "Blend of pumpkin spice sauce and banana",
        level: 61
    },
    {
        name: "blood shot eye",
        description: "Blend of strawberries, peaches, passion fruit-mango juice and orange sherbet",
        level: 65
    },   
    {
        name: "the stuff",
        description: "Sweet tasty creamy addictive frozen yogurt-like substance. You'll kill for more!",
        level: 49
    }, 
    {
        name: "the cursed frogurt",
        description: "Creamy frozen yogurt with your choice of toppings (toppings contain potassium benzoate)",
        level: 41
    }, 
    {
        name: "frankenstein smoothie bowl",
        description: "Blend of frozen bananas with mango and a bag of spinach",
        level: 52
    }
];