/* 

In class exercise

Create a two dimensional array (an array in an array).
The nested array should contain strings. Console log every string separately
by writing a nested loop. After that, freeze your code on every iteration
of the inner loop (use debugger). (edited) 
* bonus * do the same with an 3-dimensional array

*/

var twoDim = 
    [
        ["Jan", "Koos", "Piet"],
        ["Sannie", "Mari", "Lisbet"],
        ["Nikki", "Pikki", "Tikki"]
    ];

for (var i = 0;i < twoDim.length;i++){
    console.log(twoDim[0][0]);
    debugger
    for (var j = 0;j < twoDim.length;j++);
}

//////////////////////////////////////
// In Class Exercises 

// var student = {
//   firstname: "Stephan",
//   lastname: "Griesel", 
//   grade: "A+"
// }

// // var dynamicKey = "grade"
// // student.grade = "B"
// // student.dynamicKey = "Webdev"

// // console.log(student.grade)
// // //student = undefined
// // console.log(student)

// var keys = Object.keys(student)
// var values = Object.values(student)

// console.log(keys)
// console.log(values)


var user = { name: "Nick", 
             id: 7,
             books: []
            }

var user2 = { name: "Charlie", 
              id: 17,
              books: [] 
            }
var user3 = { name: "Dick", 
              id: 73,
              books: [] 
            }
var book1 = { title: "The Catcher in the Rye", 
              author: "J.D Salinger", 
              isbn: "0316769487", 
              category: "Classic Literature" 
            }

var book2 = { title: "To Kill a Mockingibrd", 
              author: "Harper Lee", 
              isbn: "0446310786", 
              daysLeft: 23,
              category: "Classic Literature" 
            }

user.books.push(book1)
user2.books.push(book2)
user2.books.push(book1)
user3.books.push(book2)

var library = [user, user2, user3]

// console.log(library)
console.log(library[1].books[1])

// for(let i = 0; i < library.length; i++) {
//   for(let j = 0; j <  library[j].books.length; j++) {
//     console.log(library[i].books[i])
//   }
// }


var twoD = [
  ["Bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Bill"],
  ["Thomas", "Barry", "Alex"]
]

var oneDim = ["Sarah", "Susy", "Alex"]
// console.log(twoD[0][2])

// for(let i = 0; i < oneDim.length; i++) {
//   console.log(oneDim[i])
// }

for(let i = 0; i < twoD.length; i++) {
  for(let j = 0 ; j < twoD[i].length; j++) {
    debugger
    console.log(twoD[i][j])
  }
}

var x = [1,2312,421]

console.log(x.length)


var someObject = {
  firstname: "Jurgen",
  lastname: "Tonneyck",
  fullName: function(){
    console.log(this.firstname + " " + this.lastname)
  }
}

someObject.fullName()

var someArray = [1,2,3,4]

someArray.pop2 = function() {
  let x = this[this.length-1]
  this.splice(this.length - 1, 1)
  return x
}

someArray.pop2()
console.log(someArray)


someArray.pop()

function person(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname

  this.fullName = function(){
    console.log(this.firstname + " " + this.lastname)
  }
}

var stefano = new person("Stefano", "Noventa")

stefano.fullName()


