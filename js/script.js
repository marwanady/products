var allProducts = document.querySelectorAll(".product-card");
var selected = document.querySelector(".selected-products");
var list = document.querySelector(".product-list");
var allPriceContainer = document.querySelector(".total-container");
var total = document.querySelector("#total-price-display");
var btn = document.querySelector(".buy-btn");
  
var totalPrice = 0;

allProducts.forEach(function (item) {
     var price = +(item.querySelector("p").getAttribute("price"));

    item.onclick = function () {
        totalPrice += price;
        selected.style.display = "block";
        list.innerHTML += `<p>${item.querySelector(".product-name").textContent}</p>`;

        if (list.innerHTML != "") {
            btn.style.display = "block";
     
           
        }

        btn.onclick = function () {
            allPriceContainer.style.visibility = "visible";
            total.innerHTML = totalPrice;
        };
    };
});