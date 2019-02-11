// $(document).ready(function() {
  const totalScore = $(".score");
  const cages = $(".cage");
  const kips = $(".kip");
  let lastCage;

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
  console.log(randomTime(5, 999));

  
  // Random cage
  function randomCage(cages) {
    const idx = Math.floor(Math.random() * cages.length);
    const cage = cages[idx];
    if(cage === lastCage){
      console.log("same cage, moving on...");
      return randomCage(cages);
    }

    lastCage = cage;
    return cage;
  }
  
// });