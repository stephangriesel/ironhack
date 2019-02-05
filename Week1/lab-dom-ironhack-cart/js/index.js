// Iteration 1

var product = document.getElementsByClassName("product");
product[0].innerHTML = "IronBubble-Head";

var price = document.getElementsByClassName("price")[0];
price.innerHTML = 2;

var total = document.getElementsByClassName("final-total")[0];
total.innerHTML = 0;

var calculateBtn = document.getElementsByClassName("btn-success");
//console.log(calculateBtn)

calculateBtn[0].addEventListener("click", calculatePrices);

function calculatePrices() {
  var allPrices = document.getElementsByClassName("price");
  var allQuantities = document.getElementsByClassName("qty");
  var totalPrice = 0;
  for (let i = 0; i < allQuantities.length; i++) {
    var totalProductPrice = allPrices[i].innerHTML * allQuantities[i].value;
    totalPrice += totalProductPrice;
    document.getElementsByClassName("total-item")[
      i
    ].innerHTML = totalProductPrice;
    console.log("Price per elemet", totalProductPrice);
  }
  console.log("Total price", total);
  console.log(allPrices, allQuantities);

  var quantity = document.getElementsByClassName("qty")[0].value;
  //var totalPrice = quantity * price.innerHTML;

  total.innerHTML = totalPrice;
  console.log(totalPrice);
}

// Iteration 2: Add another product
// Add a second product.

var moreProduct = document.createElement("p");

var addButton = document.getElementById("add-product");
addButton.onclick = addNewProduct;

function addNewProduct() {
  var name = document.getElementById("new-name").value;
  console.log(name);

  var price = document.getElementById("new-price").value;
  console.log(price);

  var newProduct = `

      <div class="product-name item">
        <span class="product">${name}</span>
      </div>
      <div class="cost-unit item">
        <span class="price">${price}</span>
      </div>
      <div class="quantity-product">
        <label>QTY:</label>
        <input class="qty" type="number" />
      </div>
      <div class="total-item">
        <span class="total"></span>
      </div>
      <div class="delete-item">
        <button class="btn-delete">Delete</button>
      </div>

    `;

  var newWrapper = document.createElement("div");
  newWrapper.className = "wrapper";

  newWrapper.innerHTML = newProduct;
  var body = document.getElementsByTagName("body")[0];
  body.insertBefore(newWrapper, document.getElementById("button"));
}

// // Iteration 4: Deleting a product
// // Associate the “Delete” buttons to click events so that when you click one, it deletes that product from the list. Steps to follow:

var deleteBtn = document.getElementsByClassName("btn-delete");
deleteBtn[0].addEventListener("click", removeChild);

function removeChild() {
  var prodItem = document.querySelector(".wrapper");
  prodItem.parentNode.removeChild(prodItem);
}
