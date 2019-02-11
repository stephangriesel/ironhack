$(document).ready(function() {
  const totalScore = $(".score");
  const kipCages = $(".cage");
  const kips = $(".kip");

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

  // Pick random cage
  function randomCage(randomized) {
    const randomIndex = Math.floor(Math.random() * randomized.length);
    const cage = kipCages[randomIndex];
    console.log(randomIndex);
  }
  randomCage(kipCages);
  
});
