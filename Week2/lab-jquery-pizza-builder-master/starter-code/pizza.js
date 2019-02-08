var totalPrice = 13;

// Buttons

$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle("pep");
  $(this).toggleClass("active");
  $("ul li:contains('pepperonni')").toggle(1000);

  // If topping removed/added update totalprice
  if ($(this).hasClass("active")) {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
  console.log(totalPrice);
  // Pass value to totalprice id
  $("#total-price").html(totalPrice);
});

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle("mushroom");
  $(this).toggleClass("active");
  $("ul li:contains('mushrooms')").toggle(1000);

  if ($(this).hasClass("active")) {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
  console.log(totalPrice);
  $("#total-price").html(totalPrice);
});

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle("green-pepper");
  $(this).toggleClass("active");
  $("ul li:contains('green')").toggle(1000);

  if ($(this).hasClass("active")) {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
  console.log(totalPrice);
  $("#total-price").html(totalPrice);
});

$(".btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  $("ul li:contains('white')").toggle(1000);

  if ($(this).hasClass("active")) {
    totalPrice += 3;
  } else {
    totalPrice -= 3;
  }
  console.log(totalPrice);
  $("#total-price").html(totalPrice);
});

$(".btn-crust").on("click", function() {
  $("#main-crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  $("ul li:contains('gluten')").toggle(1000);

  if ($(this).hasClass("active")) {
    totalPrice += 5;
  } else {
    totalPrice -= 5;
  }
  console.log(totalPrice);
  $("#total-price").html(totalPrice);
});

// Show main crust

$("section#main-crust").removeClass("crust-gluten-free");

// Hide white sauce & gluten free default

$(".sauce-white").toggleClass("sauce-white");
$(".crust-gluten-free").hide();

// Change button state for items not added

$("button#sauce").removeClass("active");
$("button#gluten").removeClass("active");

// Hide options in price summary that is not on the pizza

$("ul li:contains('gluten')").hide();
$("ul li:contains('white')").hide();

// Gijs example, for reference  :)

// Set topping price to variable to add to totalprice (see line 115):
// newPrice($(this), "pepperonni")
//var price = parseInt($(`ul li:contains('pepperonni')`).html().slice(1,2));

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
