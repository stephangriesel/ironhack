/* Create a variable hacker1 with the driver’s name

Print "The driver's name is XXXX"

Create a variable hacker2 and ask the user for the navigator’s name

Print "The navigator's name is YYYY"*/

let hacker1 = "Pete";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = prompt("Whats your name?");

console.log(`The navigator name is ${hacker2}`);

/* Depending on which name is longer, print:
The Driver has the longest name, it has XX characters or
Yo, navigator got the longest name, it has XX characters or
wow, you both got equally long names, XX characters!!*/

if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has XX characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has XX characters");
} else {
  console.log("wow, you both got equally long names, XX characters!!");
}

// Print all the characters of the driver’s name, separated by a space and in capitals ie. "J O H N"


let newDriver="John";
let newName = "";
for(let i = 0; i < newDriver.length; i++ ){
	if(i < newDriver.length - 1){
   		newName += newDriver[i].toUpperCase() + " "; 
    }
	else{
		newName += newDriver[i].toUpperCase()
	}
}
console.log(newName);

// Print all the characters of the navigator’s name, in reverse order. ie. "nhoJ"

const str = "nhoJ"

reverse = str.split('').reverse().join('');
console.log(reverse);

// Depending on the lexicographic order of the strings, print:

if (hacker1 > hacker2)
{
	console.log('"' + hacker1 + '" goes first "' + hacker2 + '".')
}
else if (hacker2 < hacker1)
{
	console.log('"' + hacker1 + '" goes first definitely "' + hacker2 + '".') 
} else {
  console.log('What?! You both got the same name?')
}
