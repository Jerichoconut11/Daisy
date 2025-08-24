export let cart = [
  {
    productId: "0270851834",
    quantity: 1,
  },
  {
    productId: "1728985249",
    quantity: 1,
  },
];

export function addToCart(productId, quantity) {
  let cartItem = cart.find((item) => item.productId === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
}

export function removeCartItem(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}
