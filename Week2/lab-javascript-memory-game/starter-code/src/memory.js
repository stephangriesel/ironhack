var MemoryGame = function (cards) {
  this.cards = cards;
};

MemoryGame.prototype.shuffleCards = function () {
  if ( addOrRemove ) {
    $( "#foo" ).addClass( className );
  } else {
    $( "#foo" ).removeClass( className );
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
}

MemoryGame.prototype.isFinished = function () {
};

$("card").on("click", function() {
  $( "card" ).children( ".back" ).toggle( ".back" );
});


