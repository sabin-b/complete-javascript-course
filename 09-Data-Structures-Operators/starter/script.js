'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
 * object destructuring
 *
 */

let {
  name: restaurantName,
  location: restaurantLocation,
  starterMenu: starter = [],
  openingHours: { fri },
} = restaurant;

console.log(restaurantName, restaurantLocation, starter);

// * mutating variable
let aa = 10;
let bb = 20;
let obj = { aa: 25, bb: 50 };
({ aa, bb } = obj);
console.log(aa, bb);

/*
 * object destructuring end /*
 *
 */

/*
 * array destructuring
 *
 */
let arrayExample1 = ['name1', 'name 2', 25, 50, 100, 60, 5055];

let [, a, , , , , last] = arrayExample1;

console.log(a, last);

// ! destructering from object
const restaurant2 = {
  name: 'Classico Italiano',
  // location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, lastIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[lastIndex]];
  },
};

/*
 * values interchanging
 *
 */

let [main, , secondary] = restaurant2.categories;

console.log(`before interchange: ${main}-${secondary}`);
/*
 * values interchange
 *
 */
[main, secondary] = [secondary, main];
console.log(`after interchange: ${main}-${secondary}`);

/*
 * getting a new array from func return value
 *
 */

let [item1, item2] = restaurant2.order(0, 0);
console.log(item1, item2);

/*
 * nested array
 *
 */

let exampleArray1 = [10, 20, [250, 500, 100, 101]];
let [e1, e2, [ne1]] = exampleArray1;
console.log(e1, e2, ne1);

/*
 * nested array default value
 *
 */

let [el1, el2, [nel1, nel2, , nel4 = 55]] = exampleArray1;
console.log(nel4);
