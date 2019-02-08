$(document).ready(function(){
  $(".sauce-white").hide();
});

// Write your Pizza Builder JavaScript in this file.

// Iteration 1: Add and remove toppings
// There are five buttons on the left of the pizza builder. Three of those have to add or remove toppings from the pizza. Write the JavaScript necessary for those three buttons to add and remove pepperonni, mushrooms and green peppers from the pizza. Don’t worry about updating the price. We will do it later.

// Each individual topping has its own HTML element:



$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle("mushroom")
  console.log("hello mushroom");
  $(this).toggleClass("active");
});

$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle("pep");
  console.log("hello pepperonni");
  $(this).toggleClass("active");
});

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle("green-pepper");
  console.log("hello greenpepper");
  $(this).toggleClass("active");
  // $(this).closest("li").remove();
});

$(".btn-sauce").on("click", function() {
  $(".sauce-white").toggle(".sauce-white");
  $(this).toggleClass("active");
  console.log("hello whitesauce");
});

// $(document).ready(function(){
//   $(".crust").removeClass("crust-gluten-free");
//  });

 $(".btn-crust").on("click", function() {
  $(".crust").toggle("crust-gluten-free");
  $(this).toggleClass("active");
  console.log("hello crust");
});


// Iteration 2: Sauce and crust options
// Wait a minute… this pizza comes with white sauce and gluten-free crust by default! Since that is a ridiculous default setting, we need to fix this as fast as possible. The last two buttons on the left are supposed to handle special options for the sauce and crust of your pizza. Make it so regular sauce and crust are selected by default. Also write the JavaScript code that will let users select white sauce and gluten free crust if they want to choose them. Again, don’t worry about updating the price.

$(".sauce-white").hide(); // this vs document ready on top?
// $(".crust-gluten-free").hide();

// Iteration 3: Change the buttons’ state
// Currently our pizza builder’s buttons look the same, no matter if the option is activateed or not. If you notice, all the buttons have an active class.

$("button#sauce").removeClass("active");
$("button#gluten").removeClass("active");

// Iteration 4: Ingredients and prices
// On the right side of the pizza builder there is a price section. It should show the ingredients we have in the pizza, not all of them. By default, it should show the base price $10, and the price for the pepperonni, mushrooms, and green pepper.

$("ul li:contains('gluten')").hide();
$("ul li:contains('white')").hide();

// Use JavaScript to hide and show the items by default. For now, forget the total price of the pizza. When an ingredient is added or removed, update the list to show/hide the ingredient in the list.

// By default, the selected ingredients should be pepperonni, mushrooms, and green peppers. Once we remove the pepperonni and we add the white sauce, the list should show:

// $10 cheese pizza
//   + $1 mushrooms
//   + $1 green peppers
//   + $3 white sauce
// Don’t worry about the total price right now.

// Hint: How could we select the current ingredients? Remember we have a jQuery Selector that allows us to check if an HTML Node contains a certain string smile



