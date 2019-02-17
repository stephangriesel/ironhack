// console.log("hello");

//map, reduce, filter and sort to manipulate arrays

let numbers = [12,23,4,23,34,16];

// let things = ['table', 'chair', 'couch', 'lamp', "apple"];

// // reduce with numbers

// let sum = numbers.reduce(function(passedIn, item) {
//     console.log(passedIn, item);
//     return passedIn + item;
// },0);

// // console.log("The total is", sum);

// // reduce with words in array

// let items = things.reduce(function(current, item){
//     // the unicode I am using has lower unicode value than the the first item in array (T)
//     console.log("comparing", current, "to", item)
//     // compare and see which one is less, comes first
//     return (current < item) ? current: item;
// }, "\u2044");
// console.log("first in the alphabet is", items);

// filter with number

// const filtered = numbers.filter(function(value){
//     return value >= 0;
// });

// ES6 clean up
const filtered = numbers.filter(value => value >= 0);

console.log(filtered);


