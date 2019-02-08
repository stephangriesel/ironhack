// Buttons

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle("mushroom")
  $(this).toggleClass("active");
  $("ul li:contains('mushrooms')").toggle( 1000 );
});

$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle("pep");
  $(this).toggleClass("active");
  $("ul li:contains('pepperonni')").toggle( 1000 );
});

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle("green-pepper");
  $(this).toggleClass("active");
  // remove li if clicked but how to add again, conditional?
  $("ul li:contains('green')").toggle( 1000 );
});

$(".btn-sauce").on("click", function() {
  $(".sauce-white").toggle(".sauce-white");
  $(this).toggleClass("active");
  // $("ul li:contains('white')").hide();
  // remove li if clicked but how to add again, conditional?
  $("ul li:contains('white')").toggle( 1000 );
});

 $(".btn-crust").on("click", function() {
  $(".crust-gluten-free").toggle("crust-gluten-free");
  $(this).toggleClass("active");
  $("section#main-crust").addClass("crust-gluten-free");
  $("ul li:contains('gluten')").toggle( 1000 );
});

// Show main crust

$("section#main-crust").removeClass("crust-gluten-free");

// Hide white sauce & gluten free default

$(".sauce-white").hide(); // this vs document ready on top?
$(".crust-gluten-free").hide();

// Change button state for items not added

$("button#sauce").removeClass("active");
$("button#gluten").removeClass("active");

// Hide options in price summary that is not on the pizza

$("ul li:contains('gluten')").hide();
$("ul li:contains('white')").hide();



