// Iteration 1

var product = document.getElementsByClassName("product");
product[0].innerHTML = "IronBubble-Head";

var price = document.getElementsByClassName("price")[0];
price.innerHTML = 2;

var total = document.getElementsByClassName("total")[0];
total.innerHTML = 0;

var calculateBtn = document.getElementsByClassName("btn-success");
//console.log(calculateBtn)

calculateBtn[0].addEventListener("click", calculatePrices);

function calculatePrices() {
  var quantity = document.getElementsByClassName("qty")[0].value;
  var totalPrice = quantity * price.innerHTML;

  total.innerHTML = totalPrice;
  console.log(totalPrice);
}

// Iteration 2: Add another product
// Add a second product.

var moreProduct = document.createElement("p");

var addButton = document.getElementById("add-product");
addButton.onclick = addNewProduct;


function addNewProduct() {

  var name = document.getElementById("new-name");
  product.innerHTML = name;
  

  var priceAdd = document.getElementById("new-price");



  var newProduct = `

      <div class="product-name item">
        <span class="product">${name}</span>
      </div>
      <div class="cost-unit item">
        <span class="price">${priceAdd}</span>
      </div>
      <div class="quantity-product">
        <label>QTY:</label>
        <input class="qty" type="number" />
      </div>
      <div class="total-item">
        <span class="total">0</span>
      </div>
      <div class="delete-item">
        <button class="btn-delete">Delete</button>
      </div>

    `;
    
var newWrapper = document.createElement("div");
newWrapper.className = "wrapper";

newWrapper.innerHTML = newProduct;
var body = document.getElementsByTagName('body')[0];
body.insertBefore(newWrapper,document.getElementById("button"));
}

// function addProductFunc() {
//   var addProduct = document.createElement("wrapper");
//   var textnode = document.createTextNode("New Product");
//   node.appendChild(textnode);
//   document.getElementsByClassName("product").appendChild(node);
// }

// Iteration 2: Add another product
// Add a second product.

// IDEAS:
// <script>
// function myFunction() {
//   var node = document.createElement("LI");
//   var textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
// }
// </script>


