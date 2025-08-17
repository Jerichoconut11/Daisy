import { products } from "../data/products.js";

let htmlElemet = "";

products.forEach((product) => {
  htmlElemet += `
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
            product.rating.count * 10
          }.png" alt="4.5 - rating" />
          <span>${product.rating.views}</span>
        </div>

        <div class="product-details">
          <div class="product-name">${product.name}</div>
          <div class="product-price">₱${product.pricePeso}</div>
        </div>

        <div class="quantity-container">
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>

        <button class="add-to-cart-button">Add to cart</button>
        </div>
        `;
});

document.querySelector(".grid-products").innerHTML = htmlElemet;
