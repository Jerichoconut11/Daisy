import { cart, removeCartItem } from "../data/cart.js";
import { products } from "../data/products.js";

const cartSummary = cart
  .map((checkoutItem) => {
    const productId = checkoutItem.productId;

    const matchingItem = products.find((product) => product.id === productId);

    if (!matchingItem) return "";
    return `
    <div class="border-container js-cart-item-container-${matchingItem.id}">
          <div class="process-date">
            Delivery date: Monday - September 1, 2025
          </div>
          <div class="checkout-grid">
            <div class="image">
              <img
                class="product-image"
                src="${matchingItem.image}"
                alt=""
              />
            </div>
            <div class="product-details">
              <div class="">${matchingItem.name}</div>
              <div class="product-price">₱${matchingItem.pricePeso}</div>
              <div class="product-quantity">
                <span>Quantity: </span>
                <span class="span-quanity-count">${checkoutItem.quantity}</span>
                <span class="span-update">Update</span>
                <span class="span-delete" data-product-id="${matchingItem.id}">Delete</span>
              </div>
            </div>

            <div class="delivery-option">
              <div class="delivery-option-title">Choose a delivery option:</div>
              <div class="options">
                <input type="radio" name="${matchingItem.id}"/>
                <div>
                  <div class="delivery-date">
                    <span class="span-date">Monday, September 1, 2025</span>
                  </div>
                  <div class="delivery-fee">
                    <span class="span-shipping">Free Shipping</span>
                  </div>
                </div>
              </div>
              <div class="options">
                <input type="radio" name="${matchingItem.id}"/>
                <div>
                  <div class="delivery-date">
                    <span class="span-date">Tuesday, September 2, 2025</span>
                  </div>
                  <div class="delivery-fee">
                    <span class="span-shipping">₱100 - Shipping fee</span>
                  </div>
                </div>
              </div>
              <div class="options">
                <input type="radio" name="${matchingItem.id}"/>
                <div>
                  <div class="delivery-date">
                    <span class="span-date">Wednesday, September 3, 2025</span>
                  </div>
                  <div class="delivery-fee">
                    <span class="span-shipping">₱165 - Shipping fee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
`;
  })

  .join("");
const checkOutContainer = document.querySelector(".checkout-container");
checkOutContainer.innerHTML = cartSummary;

const deleteItem = document.querySelectorAll(".span-delete");
deleteItem.forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeCartItem(productId);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );

    container.remove();
  });
});
