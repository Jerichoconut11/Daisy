import { products } from "../data/products.js";
import { cart, addToCart } from "../data/cart.js";

const productHtml = products
  .map(
    (product) => `
          <div class="products-container">
            <div class="image-container">
                <img
                  class="product-image"
                  src="${product.image}"
                  alt=""
                />
              </div>

              <div class="product-rating">
                <img src="images/ratings/rating-${
                  product.rating.rate * 10
                }.png" alt="4.5 - rating" />
                <span>${product.rating.count}</span>
              </div>

              <div class="product-details">
                <div class="product-name">${product.name}</div>
                <div class="product-price">₱${product.pricePeso}</div>
              </div>

              <div class="quantity-container">
                <select class="quantity-selector-${product.id}">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <button class="add-to-cart-button" data-product-id="${
                product.id
              }">Add to cart</button>
            </div>
            `
  )
  .join("");
const gridProducts = document.querySelector(".grid-products");
gridProducts.innerHTML = productHtml;

const addToCartButton = document.querySelectorAll(".add-to-cart-button");
addToCartButton.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    const quantitySelector = document.querySelector(
      `.quantity-selector-${productId}`
    );
    const quantity = Number(quantitySelector.value);

    addToCart(productId, quantity);
    renderedCart();
    console.log(cart);
  });
});

function renderedCart() {
  const cartQuantityDiv = document.querySelector(".cart-quantity");
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  cartQuantityDiv.textContent = totalQuantity;
}
