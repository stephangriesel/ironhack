// $(document).ready(function() {
  const totalScore = document.getElementById("score"); // issue again with jquery
  const yourScore = document.getElementById("yourscore");
  const cages = $(".cage");
  const kips = document.querySelectorAll(".kip"); // could not get foreach working when using jquery syntax
  let lastCage; // Skip cage if same as previous
  let endGame = false; // If true game stops
  let score = 0;
  let difficulty = {
    min:1000,
    max:3000
  }

  // Button click events
  $("#start").click(function() {
    beginGame();
  });

  $("#pause").click(function() {
    console.log("Pause was clicked");
  });

  $("#reset").click(function() {
    console.log("Reset was clicked");
  });

  // Random time
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  
  // Random cage
  function randomCage(cages) {
    const idx = Math.floor(Math.random() * cages.length);
    const cage = cages[idx];
    if(cage === lastCage){ // Skip cage if same as previous
      console.log("same cage, moving on...");
      return randomCage(cages);
    }
    lastCage = cage;
    return cage;
  }

  // Show kip
  function popupKip() {
    const time = randomTime(difficulty.min, difficulty.max);
    console.log(time);
    const cage = randomCage(cages);
    // console.log(time, cage);
    cage.classList.add("show");
    setTimeout(function() {
      cage.classList.remove("show");
      if(!endGame) popupKip(); // if true game stops
    },time)
  }

  // Begin game 
  function beginGame() {
    // totalScore.textContent = 0;
    endGame = false;
    score = 0;
    popupKip();
    setTimeout(function() {
      endGame = true
    }, 10000)
  }

  function whack(e) {
    if(!e.isTrusted) return; // verify valid click
    //console.log(e);
    score++;
    // remove kip if clicked
    this.classList.remove("show");
    totalScore.textContent = score;

  }

  $("#easy-btn").click(function(){
    difficulty.min = 3000;
    difficulty.max = 4000;
  })

  $("#medium-btn").click(function(){
    difficulty.min = 1500;
    difficulty.max = 2000;
  })

  $("#hard-btn").click(function(){
    difficulty.min = 500;
    difficulty.max = 900;
  })

  kips.forEach(kip => kip.addEventListener('click', whack)); // for loop
  
// });