// onload tomato sauce test

var totalPrice = 10;

// Buttons

$(".btn-pepperonni").on("click", function() {
 
  $(".pep").toggle("pep");
  $(this).toggleClass("active");
  $("ul li:contains('pepperonni')").toggle( 1000 );
 // newPrice($(this), "pepperonni")

 //var price = parseInt($(`ul li:contains('pepperonni')`).html().slice(1,2));
  if ( $(this).hasClass("active") ) {
    totalPrice += 1
  } else {
    totalPrice -= 1
  }
  console.log(totalPrice)
  $("#total-price").html(totalPrice)

});

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle("mushroom")
  $(this).toggleClass("active");
  $("ul li:contains('mushrooms')").toggle( 1000 );
});

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle("green-pepper");
  $(this).toggleClass("active");
  $("ul li:contains('green')").toggle( 1000 );
});

$(".btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  $("ul li:contains('white')").toggle( 1000 );
});

 $(".btn-crust").on("click", function() {
  $("#main-crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  $("ul li:contains('gluten')").toggle( 1000 );
});

// Show main crust

$("section#main-crust").removeClass("crust-gluten-free");

// Add tomato sauce
// $(".sauce").addClass("sauce");


// Hide white sauce & gluten free default

$(".sauce-white").toggleClass("sauce-white");
$(".crust-gluten-free").hide();

// Change button state for items not added

$("button#sauce").removeClass("active");
$("button#gluten").removeClass("active");

// Show tomato base 



// Hide options in price summary that is not on the pizza

$("ul li:contains('gluten')").hide();
$("ul li:contains('white')").hide();

// Hide/display crust



// function newPrice( $this, ingredient ){
//   var price = parseInt($(`ul li:contains(${ingredient})`).html().slice(1,2));
//   if ( $this.hasClass("active") ) {
//     totalPrice += price;
//   } else {
//     totalPrice -= price;
//   }
//   console.log(totalPrice)
//   $("#total-price").html(totalPrice)
// }

