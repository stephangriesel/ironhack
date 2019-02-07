// Write your Pizza Builder JavaScript in this file.

// Iteration 1: Add and remove toppings
// There are five buttons on the left of the pizza builder. Three of those have to add or remove toppings from the pizza. Write the JavaScript necessary for those three buttons to add and remove pepperonni, mushrooms and green peppers from the pizza. Don’t worry about updating the price. We will do it later.

// Each individual topping has its own HTML element:

// <section class="green-pepper one"></section>
// <section class="green-pepper two"></section>
// <section class="mushroom one">
//   <div class="cap">1</div>
//   <div class="stem"></div>
// </section>
// <section class="pep one">1</section>
// <section class="pep two">2</section>
// Create the code to display those elements when the buttons are clicked.

$(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle("green-pepper");
    console.log("hello greenpepper")
  });

$(".btn-pepperonni").on("click", function() {
    $(".pep").toggle("pep");
    console.log("hello pepperonni")
  });

$(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle("mushroom");
    console.log("hello mushroom")
  });

$(".btn-sauce").on("click", function() {
    $(".sauce").toggle("sauce-white");
    console.log("hello whitesauce")
  });

$(".btn-crust").on("click", function() {
    $(".cheese").toggle("cheese sauce-white");
    console.log("hello crust")
  }); 

// Iteration 2: Sauce and crust options
// Wait a minute… this pizza comes with white sauce and gluten-free crust by default! Since that is a ridiculous default setting, we need to fix this as fast as possible. The last two buttons on the left are supposed to handle special options for the sauce and crust of your pizza. Make it so regular sauce and crust are selected by default. Also write the JavaScript code that will let users select white sauce and gluten free crust if they want to choose them. Again, don’t worry about updating the price.

// Both the crust and the sauce have their own HTML elements:

// <section class="crust crust-gluten-free">
//   <section class="cheese"></section>
//   <section class="sauce sauce-white"></section>
// </section>
// As you can see, the sections have two classes .crust-gluten-free and sauce-white that may not be the best choice.
