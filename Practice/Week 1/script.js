/* 1.   write a loop that counts from 0 to 100 and logs the current number to the console 

for ([initialExpression]; [condition]; [incrementExpression])
  statement

*/

// var i;
 
// for(i = 0; i < 101; i++ )
// console.log(i);

///////////////////////////////

/* 2.   define a function that counts from 0 to 100 if called */

//Stephan Copy
/*function countNumbers () {
    for(i = 0; i < 101; i++ ) {
        console.log(i); 
    }
}

countNumbers()

/* Gijs Copy
function counter (amountOfCount) {
    for(var i = 0; i < amountOfCount; i++){
        console.log(i + 1)
    }
}

counter(100);
*/

///////////////////////////////

/* 3.   define a function that counts from 0 to whatever value you passed to it, call this function with 3 different arguments */


function countFunction(a,b,c) {
    for(var p = 0; p < a; p++)
    //console.log(p) // My initial attempt
    console.log(arguments[0]); // resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    console.log(arguments[1]);
    console.log(arguments[2]);
} 

countFunction(30,50,70)

///////////////////////////////

/* 4.   given this array: var arrayWords = ["cow", "chicken", "dog", "cat"] console log every element using a loop */

/*var arrayWords = ["cow", "chicken", "dog", "cat"]
var emptyArray = "";
var i;
for (i = 0; i < arrayWords.length; i++ ){
    emptyArray = emptyArray + arrayWords[i] + " ";
}
console.log(emptyArray);*/

/////////////////////////////////

/* 5.   define a function that logs every elements of the arrayWords variable. Call this function. */

// Stephan comments: Think I am getting there with this one?

var arrayWords = ["cow", "chicken", "dog", "cat"];
var emptyArray = "";
function logElements (){
    for (i = 0; i < arrayWords.length; i++ ){
        emptyArray = emptyArray + arrayWords[i] + " "; {
            console.log(emptyArray)
        }
    }
}

logElements();

//////////////////////////////////

/* 6.   define a function that logs all words of any array with words you pass to it. Declare two of those arrays. */

var arrayOne = ["bowl","spoon","fork","knife"];
var arrayTwo = ["window","chair","table","lamp"];

// Question: Not sure if I understand this correct, should I do forloop twice?

//////////////////////////////////

/* 7.   define a function that logs all words of any array with words you pass to it, except when the word is "cow" (use a conditional). Declare two of those arrays and call the function on them */
// code here

/* Need to understand .6 before I can attempt this one.

///////////////////////////////////

/* 8. given this array print out all names. The output should be: */
/*Mittens
Doge
Mickey
Chip
Dale
*/

// Stephan comments: Example used to solve this:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 

/*var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale'];
myPets.forEach(function(pet) {
    console.log(pet);
  });*/

// forEach makes it looks so easy. Is there a long way just for me to get better understanding? I was thinking forloop like #4.

/*var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale']
var allMyPets = "";
var i;
for (i = 0; i < myPets.length; i++ ){
    allMyPets = allMyPets + myPets[i] + " ";
}
console.log(allMyPets);*/

//////////////////////////////////////

/* 9. print out only the even names. The output should be: 
Mittens
Mickey
Dale
*/

/*var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale'];*/

//Stephan comment: Not sure what to do here? 

/* 10. Bonus 1: print out all the musical instruments of myCollections 

var myCollections = [['ball', 'tennis racket', 'boxing glove'], ['pants', 't-shirt', 'shoes'], ['guitar', 'piano', 'mandolin']];

*/

// Question: Used same for loop as #5. The only difference I notice is the array inside an array. I can also refer to them by index numbers but how would I loop through each index number separately, I tried myCollections[i][i].

var myCollections = [['ball', 'tennis racket', 'boxing glove'], ['pants', 't-shirt', 'shoes'], ['guitar', 'piano', 'mandolin']];
var collectionsArray = "";
function logCollection (){
    for (i = 0; i < myCollections.length; i++ ){
        collectionsArray = collectionsArray + myCollections[i] + " "; {
            console.log(collectionsArray)
        }
    }
}

logCollection();

/* 11. Bonus 2: print out the following musical instruments one at a time. The output should be: */
/*
guitar
piano
mandolin
*/

// 2 attempts, but first one does not print one new line

var anotherArray = ["guitar","piano","mandolin"];
var anotherEmptyArray = "";

function logInstruments () {
    for(j = 0; j < anotherArray.length; j++){
        anotherEmptyArray += anotherArray[j] + " "; {
            console.log(anotherEmptyArray)
        }
    }
    
}

logInstruments();

// I did this one before with the pets in #8, am I doing this correct?

var anotherArray = ["guitar","piano","mandolin"];
anotherArray.forEach(function(instrument) {
    console.log(instrument);
  });

  //*12. Bonus 3: print out all the odd elements. The output should be: */
 /*
 ball
 boxing glove
 pants
 shoes
 guitar
 mandolin
 */

 // Question: Not sure if I understand this question correctly? Should I just add these to array and print it out, looks repetive from previous exercises?

var oddArray = ["ball", "boxing glove", "pants", "shoes", "guitar", "madolin"]
var emptyOddArray = "";

function oddArrayFunction () {
    for(o = 0;o < oddArray.length; o++) {
        emptyOddArray += oddArray[o] + " "; {
            console.log(emptyOddArray)
        }
    }
}

oddArrayFunction();

// Same as #8

var anotherOddArray = ["ball", "boxing glove", "pants", "shoes", "guitar", "madolin"];
anotherOddArray.forEach(function(oddy) {
    console.log(oddy);
  });

