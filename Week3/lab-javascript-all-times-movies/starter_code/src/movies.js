console.log(movies);

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

let newArrayMovies = movies.map(film => {
    var filmHours = film.duration;
    // slice min characters (last 3 characters)
    var sliceMinWord = filmHours.slice(0,-3);
    // slice out hours (first 3 characters)
    totalMinutes = sliceMinWord.slice(-2);
    // slice out only the hour number
    var sliceHours = filmHours.slice(0,1);
    // convert hours to minutes
    var hoursToMin = sliceHours * 60;
    // change to number and add together
    var totalInMinutes = parseInt(totalMinutes) + parseInt(hoursToMin);
    // console.log(totalInMinutes);
    // Question, how do I update the object, this does not feel right?
    movies.duration = totalInMinutes;
});

// Get the average of all rates with 2 decimals 

// get rates form array
var getAverage = movies.map(film => {
    var getRate = film.rate;
    // console.log(getRate);
    var getRateClean = parseInt(getRate); // if i have this inside function, how am I going to get it out?
    console.log(getRateClean);
    return getRateClean;
});

console.log(getRateClean);



// var getRateClean = parseInt(getRate);
// console.log(getRateClean)

// sum of rates across array
// console.log(movies);
var getRate = movies.reduce(function(prev, cur){
    return prev + cur.rate;
},0);

// console.log("Total: ", getRate);

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
