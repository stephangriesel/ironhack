

// // higher-order functions are functions that operate on other functions, 
// // either by taking them as arguments or by returning them,





// function calculator(par1, par2, operation) {
//     return operation(par1, par2)
// }
  
// function sum(par1, par2) {
//     return par1 + par2
// }


// //Difference for each and map
// let nameArray = ["Michael" , "Eva", "Jack"];

// let newArry = nameArray.forEach(element => {
//     if(element === "Jack") {
//         element = "New Name"
//     }
// }) 

// console.log(newArry) //return -- > undefined


// function homeMadeMap(array, transform) {
//     let mapped = [];
//     for (let i = 0; i < array.length; i++) {
//         mapped.push(transform(array[i]));
//     }
//     return mapped;
// }

// const mappedArray = homeMadeMap(nameArray, function(anElement){
//     if(anElement === "Jack"){
//         anElement = "Again another one"
//     }
//     return anElement;
// })

// console.log("mappedArray",mappedArray)

// let newNameArray = nameArray.map(name => {
//     if(name === "Jack") {
//         elem = "New Name"
//     }
//     return name
// })
// console.log("newNameArray", newNameArray)



//Exercise 1.
var cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

let capital = cities.map(city => {
   return city.charAt(0).toUpperCase() + city.slice(1);  
});

console.log(capital);


// const filter = (array, conditionalFunction) =>{
//     let passed = [];
//     for (let i = 0; i < array.length; i++) {
//         if (conditionalFunction(array[i])) {
//             passed.push(array[i]);
//         }
//     }
//     return passed;
// }

// const filteredNameArray = filter(nameArray, (element) =>{
//     if (element != "Jack") {
//         return true;
//     }
//     return false; 
// })

// console.log(filteredNameArray)


// const filterNameQuick = nameArray.filter(elem => {
//     if (elem != "Jack") return elem;
// })

// console.log(filterNameQuick)

// let numbers = [1, 2, 3, 4]

// //Reduce is transforming a set of values to one value
// const reduces = (array, combine, start) => {
//     let current = start;
//     for (let i = 0; i < array.length; i++) {
//       current = combine(current, array[i]);
//     }
//     return current;
// }

// const counted = reduces(numbers, (a, b) => a + b, 0);

// console.log("COUNTY",counted)

// const reduced = numbers.reduce((a, b) => {
//    return a + b;
// })

// console.log(reduced)




// /*  
//     1. Write a function that finds the rat is.
//     2. The same function should take a paramater, which will be the killer of the rat.
//     3. Store the rat in the killed property of the assassin.
//     4. Return the new array without the rat
//     4. Get the average age of the crew
// */


// let sopranoCrew = [
//     {
//         name: "Corrado Soprano",
//         age: 70,
//         isAlive:true,
//         nickName: "Junior",
//         emotionalState: "Insecure",
//         title: "Boss",
//         killed:[]
//     },
//     {
//         name: "Tony Soprano",
//         age: 40,
//         isAlive:true,
//         nickName: "Leadbelly",
//         emotionalState: "Depressed",
//         title: "Caporegime",
//         killed:[]

//     },
//     {
//        name: "Christopher Moltisanti",
//        age: 30,
//        isAlive:true,
//        nickName: "Chrissy",
//        emotionalState: "Aggressive",
//        title: "Associate",
//        killed:[]
//     },
    
//     {
//         name: "Sal Bonpensiero",
//         age: 40,
//         isAlive:true,
//         nickName: "Pussy",
//         emotionalState: "Anxious",
//         title: "Rat",
//         killed:[]
//     },
//     {
//         name: "Silvio Dante",
//         age: 42,
//         isAlive:true,
//         nickName: "Sil",
//         emotionalState: "Calm",
//         title: "Consigliere",
//         killed:[]
//     },
//     {
//         name: "Paulie Gualtieri",
//         age: 46,
//         isAlive:true,
//         nickName: "Paulie Walnuts",
//         emotionalState: "Confused",
//         title: "Soldier",
//         killed:[]
//     }
// ];