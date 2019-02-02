/* 1.   write a loop that counts from 0 to 100 and logs the current number to the console 

for ([initialExpression]; [condition]; [incrementExpression])
  statement

*/

// var i;
 
// for(i = 0; i < 101; i++ )
// console.log(i);

///////////////////////////////

/* 2.   define a function that counts from 0 to 100 if called */

// Stephan Copy
/*function countNumbers () {
    for(i = 0; i < 101; i++ ) {
        console.log(i); 
    }
}

countNumbers()*/

/* Gijs Copy
function counter (amountOfCount) {
    for(var i = 0; i < amountOfCount; i++){
        console.log(i + 1)
    }
}

counter(100);
*/

// Question to Jurgen
// 1. How would I pass a value in parameter? I tried below

/* var test = countFunction(100);

function countNumbers (m) {
    for(i = 0; i < m; i++ ) {
        console.log(m); 
    }
}

countNumbers()*/

///////////////////////////////

/* 3.   define a function that counts from 0 to whatever value you passed to it, call this function with 3 different arguments */

// Stephan Comments: I can not continue if I don't understand above example.

/* var numberValue = countFunction(20,30,50);

function countFunction(a,b,c) {
    console.log(a,b,c)
} */

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

// Stephan comments: Think I am getting there with this one

/*var arrayWords = ["cow", "chicken", "dog", "cat"]
var emptyArray = "";
function logElements (){
    for (i = 0; i < arrayWords.length; i++ ){
        emptyArray = emptyArray + arrayWords[i] + " "; {
            console.log(emptyArray)
        }
    }
}

logElements();*/

//////////////////////////////////

/* 6.   define a function that logs all words of any array with words you pass to it. Declare two of those arrays. */

// Stephan Comments: I don't understand this one? 

//////////////////////////////////

/* 7.   define a function that logs all words of any array with words you pass to it, except when the word is "cow" (use a conditional). Declare two of those arrays and call the function on them */
// code here

// Stephan Comments: Will come back to this one as soon as I understand #7

///////////////////////////////////

/* 8. given this array print out all names. The output should be: */
/*Mittens
Doge
Mickey
Chip
Dale
*/

// Stephan comments: Example used to solve this:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 

var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale'];
myPets.forEach(function(pet) {
    console.log(pet);
  });

// forEach makes it looks so easy. Is there a long way just for me to get better understanding? I was thinking forloop like #4.

var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale']
var allMyPets = "";
var i;
for (i = 0; i < myPets.length; i++ ){
    allMyPets = allMyPets + myPets[i] + " ";
}
console.log(allMyPets);

//////////////////////////////////////

/* 9. print out only the even names. The output should be: 
Mittens
Mickey
Dale
*/

var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale'];

//Stephan comment: Not sure what to do here? 





