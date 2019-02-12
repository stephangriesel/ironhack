// $(document).ready(function() {
  const totalScore = $(".score");
  const cages = $(".cage");
  const kips = $(".kip");
  let lastCage; // Skip cage if same as previous
  let endGame = false; // If true game stops

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
    const time = randomTime(600,3000);
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
    totalScore.textContent = 0;
    endGame = false;
    popupKip();
    setTimeout(function() {
      endGame = true
    }, 10000)
  }
  
// });