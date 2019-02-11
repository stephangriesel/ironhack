// $(document).ready(function() {
  const totalScore = document.querySelectorAll(".score");
  const cages = document.querySelectorAll(".cage");
  const kips = document.querySelectorAll(".kip");
  let lastCage; // Skip cage if same as previous

  // Button click events
  $("#start").click(function() {
    console.log("Start was clicked");
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
      popupKip();
    },time)
  }
  
// });