// $(document).ready(function () {
const totalScore = document.getElementById("score"); // issue again with jquery
const cages = document.querySelectorAll(".cage");
const kips = document.querySelectorAll(".kip"); // could not get foreach working when using jquery syntax
let lastCage; // skip cage if same as previous
let endGame = false; // if true game stops
let score = 0;
let difficulty = { // level difficulty, set min/max
  min: 1000,
  max: 3000
}

// Button click events
$("#start").click(function () {
  beginGame();
});

// Difficulty buttons
$("#easy-btn").click(function () {
  $(".level-selected").html("Level Selected: Easy");
  difficulty.min = 3000;
  difficulty.max = 4000;
})

$("#medium-btn").click(function () {
  $(".level-selected").html("Level Selected: Medium");
  difficulty.min = 1500;
  difficulty.max = 2000;
})

$("#hard-btn").click(function () {
  $(".level-selected").html("Level Selected: Hard");
  difficulty.min = 500;
  difficulty.max = 900;
})


// Random time: min/max
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Random cage
function randomCage(cages) {
  console.log(cages.length); // nodelist with my 9 cages
  const randomNumber = Math.floor(Math.random() * cages.length);
  const cage = cages[randomNumber]; // random index number
  console.log(cage);
  if (cage === lastCage) { // skip cage if same as previous
    console.log("same cage, moving on...");
    return randomCage(cages);
  }
  lastCage = cage;
  return cage;
}

// Show kip
function popupKip() {
  const time = randomTime(difficulty.min, difficulty.max);
  const cage = randomCage(cages);
  console.log(time, cage);
  // console.log(time, cage);
  cage.classList.add("show");
  setTimeout(function () {
    cage.classList.remove("show");
    if (!endGame) popupKip(); // if true game stops
  }, time)
}

// Begin game 
function beginGame() {
  var seconds = document.getElementById("countdown").textContent; // game countdown start
  var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
  endGame = false;
  score = 0;
  popupKip();
  setTimeout(function () {
    endGame = true
  }, 10000);
}

// Start game on spacebar keypress
window.onkeypress = function (event) {
  if (event.keyCode == 32) {
    beginGame();
  }
}

// Whack kip and update score
function whack(e) {
  console.log(e); // log mouse event
  if (!e.isTrusted) return; // confirm trusted click
  score++;
  // remove kip if clicked
  // $(".cage").removeClass("show");
  this.classList.remove("show");
  totalScore.textContent = score;
}

// Explode kip 
$(".kip").click(function () {
  $(this).parent(".cage").removeClass("show");
  $(this).toggleClass("kipExplode");
  $(this).addClass("kipExplode");
  setTimeout(() => {
    $(this).removeClass("kipExplode");
  }, 1000)
})

// Loop through kips

kips.forEach(kip => kip.addEventListener('click', whack)); // for loop

// });

