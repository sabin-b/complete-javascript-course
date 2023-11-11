'use strict';

const shoppingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} - ${quantity}`);
  //   console.log(cart);
};

let totalQuantity = 25;
let totalPrice = 50;
export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} - ${quantity}`);
}
