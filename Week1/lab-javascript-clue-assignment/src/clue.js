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

*/

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

var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard]
var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol]
var roomsArray = [diningRoom,conservatoryRoom,studyRoom,libraryRoom,billiardRoom,loungeRoom,ballRoom,hallRoom,spaRoom,livingRoom,obervatoryRoom,theaterRoom,guestRoom,patioRoom]

/* 

Iteration 2 - Creating the mistery
At the beginning of the game, players shuffle each one of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.

Remember our tests!
We will be working with test again! You need to open the SpecRunner.html file in order to see them. The following instructions will guide you through all the methods and functionality your code should have to pass all the tests.

// 1. Random Selector
Create a method randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array.
*/

function randomSelector (gameArray) {
    // Jurgen Solution
    return gameArray[Math.floor(Math.random() * gameArray.length)]

    // Stephan Solution
    /*var randomElemChar = ""
    var resultOut = gameArray[Math.floor(Math.random() * gameArray.length)] 
    
    // shorthand Math.floor ~~
   // console.log(resultOut)
    return resultOut*/
}
let randomCharacter = randomSelector(charactersArray)
let randomWeapon = randomSelector(weaponsArray)
let randomRoom = randomSelector(roomsArray)


/* 

// 2. Create the mystery
We need to create a pickMistery method that will call randomSelector for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. Our mystery should be stored on a misteryEnvelope variable.

*/

var misteryEnvelope = [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)]

// Empty array, else it is double, no idea why!
var misteryEnvelope = []

function pickMistery () {

    misteryEnvelope.push(randomCharacter)
    misteryEnvelope.push(randomWeapon)
    misteryEnvelope.push(randomRoom)

}
/*console.log("2.")
console.log(misteryEnvelope)*/
pickMistery()

//console.log(misteryEnvelope)

/* 

Iteration 3 - Revealing the mistery
Finally, we need to reveal the mystery. Create a revealMistery method, that will receive our misteryEnvelope array as an argument and return the revealed mystery like this:

<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!

*/

function revealMistery (selectedCards){
    
    var firstName = selectedCards[0].first_name
    var lastName = selectedCards[0].last_name
    var weapon = selectedCards[1].name
    var place = selectedCards[2].name

    return firstName + lastName + " " + "killed Mr.Boddy using " + weapon + " in the " + place;
}


//console.log(revealMistery(misteryEnvelope));

// DOM 

function revealCharacterImage (selectedCards){
    var charImage = selectedCards[0].image
    document.getElementById("charImg").src = charImage
    //console.log(charImage)
    return charImage
}

revealCharacterImage(misteryEnvelope)

function revealCharacterName (selectedCards){
    var charName = selectedCards[0].first_name
    document.getElementById("name").innerHTML = charName
    //console.log(charName)
    return charName
}

revealCharacterName(misteryEnvelope)

function revealWeapon (selectedCards) {
    var weaponName = selectedCards[1].name
    document.getElementById("weapon").innerHTML = weaponName
    //console.log(weaponName)
    return weaponName
}

revealWeapon(misteryEnvelope)

function revealRoom (selectedCards) {
    var roomName = selectedCards[2].name
    document.getElementById("room").innerHTML = roomName
    //console.log(roomName)
    return roomName
}

revealRoom(misteryEnvelope)


/*document.getElementById("btn").addEventListener("click", revealMistery);

function misteryEnvelope() {
  document.getElementById("btn").innerHTML = Date();
}*/






