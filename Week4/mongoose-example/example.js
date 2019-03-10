const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp');

const Cat = mongoose.model('Cat', { name: String });

// Before code organized 

// const kitty = new Cat({ name: 'Ironhacker' });

// kitty.save((err) => { // Behind the scenes, save() is sending a MongoDB insertOne command to the database. Because save() sends information to the database, it’s asynchronous.
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('meow');
//     }
//   });

// console.log('All the CATS!');

// Cat.find({}, (err, cats) => {
//   // cats is an array of Cat instances
//   cats.forEach((cat)=> {
//     console.log(' --> cat: ', cat.name);
//   });
// });

// After code organized 

function addNewCat(catName) {
    const kitty = new Cat({ name: catName });
    kitty.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(`meow! ${catName} SAVED.`);
        }
    });
}

function showCats() {
    console.log('All the CATS!');
    Cat.find({}, (err, cats) => {
        cats.forEach((cat) => {
            console.log(' --> cat: ', cat.name);
        })
    });
}

function addTenCats() {
    for (let i = 0; i < 10; i++) {
        addNewCat(`Ironhacker ${i}`);
    }
}

addTenCats();

/* We have to wait for our cats to save before displaying them
 Remember, it's async */
setTimeout(showCats, 1500);

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


// Mongoose Promises Examples:

// Example using a callback

Cat.find({}, function(err, results) {  
  if (err) {
    console.log("An error happened:" + err);
    return;
  }
  console.log("This is all the results found", results)
});

// Example using promise 
Cat.find({})  
  .then((results) => {
    console.log("This is all the results found", results)
  })
  .catch((err) => {
    console.log("An error happened:" + err);
  });