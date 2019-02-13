// $(document).ready(function () {
  const totalScore = document.getElementById("score"); // issue again with jquery
  const cages = document.querySelectorAll(".cage");
  const kips = document.querySelectorAll(".kip"); // could not get foreach working when using jquery syntax
  let lastCage; // skip cage if same as previous
  let endGame = false; // ff true game stops
  let score = 0; //
  let difficulty = { // level difficulty, set minim
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
    endGame = false;
    score = 0;
    popupKip();
    setTimeout(function () {
      endGame = true
    }, 10000)
  }

  // Start game on spacebar keypress
  window.onkeypress = function (event) {
    if (event.keyCode == 32) {
      beginGame();
    }
  }

  // Whack kip and update score
  function whack(e) {
    if (!e.isTrusted) return; // verify valid click
    //console.log(e);
    score++;
    // remove kip if clicked
    this.classList.remove("show");
    totalScore.textContent = score;
  }

  // Explode kip - Not working, toggle not removing class, HELP!
  $(".kip").click(function () {
    $(this).toggleClass("kipExplode");
  })

  // setTimeout(function () {
  //   cage.classList.remove("kipExplode");




  kips.forEach(kip => kip.addEventListener('click', whack)); // for loop

  // for(var i = 0; i < kips.length; i++) {

  // }

// });

