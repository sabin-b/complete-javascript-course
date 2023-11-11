// * modal 1
/*
import { addToCart, totalPrice as total, tq } from './shoppingCart.js';

console.log('import module');

addToCart('soap', 10);

console.log(total, tq);

*/

// * modal 2
// import * as shoppingCart from './shoppingCart.js';
import { addToCart } from './shoppingCart.js';
import add from './shoppingCart.js';
addToCart('chair', 25);
add('jug', 50);

// ! await 2022 (don't need async function when use await in modules)
let res = await fetch('https://jsonplaceholder.typicode.com/posts');
let data = await res.json();
console.log(data);

// ! self invoking function module pattern
let selfinvoke = (function () {
  let shippingCost = 10;
  let addToCart = [];
  function cart(product, quantity) {
    addToCart.push({ product, quantity });
    console.log(
      `your items ${product} , ${quantity} added to bag, with shipping cost ${shippingCost} `
    );
  }

  return {
    addToCart,
    cart,
  };
})();

selfinvoke.cart('milk', 5);
console.log(selfinvoke.addToCart);

// *object clone
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

let state = {
  firstName: 'sabin.b',
  birthYear: 1998,
  userLogged: true,
};

let newState = cloneDeep(state);
state.birthYear = 2020;

console.log(newState, state);
