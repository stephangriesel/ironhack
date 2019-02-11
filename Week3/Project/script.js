// Notes to self:

// `const` is a signal that the identifier won’t be reassigned.
// `let`, is a signal that the variable may be reassigned
// `var` is now the weakest signal available when you define a variable in JavaScript.

const totalScore = 0;

$(document).ready(function() {
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
  function randTime (min,max) {
      console.log("randtime test");
  }
  randTime();

  // Random coverobject

  function randObjectCover (character) {
      console.log("coverobject test")
  }
  randObjectCover();



});
