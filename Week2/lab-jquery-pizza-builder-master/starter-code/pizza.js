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
    
    console.log("hello greenpepper")
  });

$(".btn-pepperonni").on("click", function() {
    
    console.log("hello pepperonni")
  });

$(".btn-mushrooms").on("click", function() {
    
    console.log("hello mushroom")
  });

$(".btn-sauce").on("click", function() {
    
    console.log("hello whitesauce")
  });

$(".btn-crust").on("click", function() {
    
    console.log("hello crust")
  });

