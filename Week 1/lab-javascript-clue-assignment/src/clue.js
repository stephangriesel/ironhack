/* Iteration 1 - Creating the cards
Clue has three different types of cards: suspects, rooms, and weapons. These three types of cards are always separated. Use data structures to model and create these cards.

In order to do this, you will need to know the game's characters (possible killers), available weapons and house rooms.

Game Characters
This Clue board game has a new roster of playable characters. All of them have first names, last names, occupations, age, description, and images. On the clue.js file you will find all the info about them.

Available Weapons
There are nine weapons. Each of them has different weight, same as the characters, you will find all the info needed on the clue.js file.

House Rooms
The game board represents the blueprints of a mansion and features fifteen different rooms. Yes, you guess, on the clue.js file you have all the info.

Data Structuring
Create one data structure for each of the people, weapons, and rooms described above. Each document must have all the info.

After creating the data structure, create an array for each type of data and push every document into their corresponding array.

For example:

var mrGreen = {
  // Properties
};

var rope = {
  // Properties
}

// etc
After creating the data structure, push every document into their corresponding array. charactersArray, weaponsArray, roomsArray.*/

// Characters 

var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          "45",
    image:         "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
};

var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          "26",
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist"
}

var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          "22",
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}

var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          "31",
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}

var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          "36",
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}

var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          "62",
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
}

// Weapons

var rope = {
    name: "rope",
    weight: 10
}
var knife = {
    name: "knife",
    weight: 8
        }
var candlestick = {
    name: "candlestick",
    weight: 2
}
var dumbbell = {
    name: "dumbell",
    weight: 30
    }
var poison = {
    name: "poison",
    weight: 2
        }
var axe = {
    name: "axe",
    weight: 15
        }
var bat = {
    name: "bat",
    weight: 13
        }
var trophy = {
    name: "trophy",
    weight: 25
        }
var pistol  = {
    name: "pistol",
    weight: 20
    }

// Rooms 

var diningRoom = {
    name: "Dining Room"
}
var conservatoryRoom = {
    name: "Conservatory"
}
var kitchenRoom = {
    name: "Kitchen"
}
var studyRoom = {
    name: "Study"
}
var libraryRoom = {
    name: "Library"
}
var billiardRoom = {
    name: "Billiard Room"
}
var loungeRoom = {
    name: "Lounge"
}
var ballRoom = {
    name: "Ballroom"
}
var hallRoom = {
    name: "Hall"
}
var spaRoom = {
    name: "Spa"
}
var livingRoom = {
    name: "Living Room"
}
var obervatoryRoom = {
    name: "Observatory"
}
var theaterRoom = {
    name: "Theater"
}
var guestRoom = {
    name: "Guest House"
}
var patioRoom = {
    name: "Patio"
}

// After creating the data structure, push every document into their corresponding array. charactersArray, weaponsArray, roomsArray.

var charactersArray = []
var weaponsArray = []
var roomsArray = []
