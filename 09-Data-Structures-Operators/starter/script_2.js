'use strict';

/*
 * spread operator
 *
 *
 */

let s_examplearr = [10, 251, 1500];
let s_newArray = [10, 20, ...s_examplearr];
console.log(s_newArray);

function arrayTest(a, ...other) {
  console.log(a, other);
}

arrayTest(...s_examplearr);

// * short circuiting

// * first value is false move to second value (truthy falsy based working)
console.log('d' || 'h');

// * first value is false doesn't move to second value
console.log('' && 'hell');

// * nullish collasingh operator ( it will only work in null values and undefinded)
let nullishExample = null;
// console.log(nullishExample ?? 10);

nullishExample ??= 20;
console.log(nullishExample);

// * menu entries

let menu = ['chicken', 'beef', 'mutton'];

for (const [index, item] of menu.entries()) {
  console.log(index, item);
}

/*
 *optional chaining operator ( it will only work in null values and undefinded)
 *
 *
 */
let arrayTest2 = [
  {
    fullName: 'sabin.b',
    category: 'developer',
  },
];

console.log(
  arrayTest2[0]?.fullName,
  arrayTest2[0]?.getdata ?? "method doesn't exist"
);
/*
 * object looping  && obejct literal
 *
 *
 */

let days = ['mon', 'thu', 'fri', 'sat'];

let openingHours = {
  [days[0]]: {
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
};

console.log(Object.entries(openingHours));
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
};

console.log();

for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(
    `resturant is open ${key} this timing ${open} and closed ${close}`
  );
}
/*
 * set methods
 *
 *
 */
let itemSet = new Set(['pizza', 'burger', 'swarama', 'grill']);

// * check expected value exist or not
console.log(itemSet.has('pizza'));
itemSet.add('grill chicken');

// * total size of set
console.log(itemSet.size);

// * delete the set value
itemSet.delete('burger');
console.log(itemSet);

for (const i of itemSet) {
  console.log(i);
}

// * example object with diffrent keys

let numobject = {
  1: 'hhjgh',
  true: 'hello',
};

console.log(numobject);

/*
 * maps
 *
 */

let restMap = new Map();
restMap.set('Fullname', 'sajin');
restMap.set('Full', 'saja');
restMap.set('name', 'sabin');

// * get
console.log(restMap.get('name'));

// * foreach
restMap.forEach((val, key) => console.log(val, key));

// * for of
for (const each of restMap.entries()) {
  let [key, value] = each;
  console.log(key, value);
}

// * set array to map value
let demoarray = [1, 2];
restMap.set(demoarray, 'i got array');

console.log(restMap.get(demoarray));

// * create map from scratch
let newdemoMap = new Map([['helo', 'super']]);

for (const i of newdemoMap.entries()) {
  console.log(i);
}

// * execise # 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

console.log(gameEvents.values());

let events = [...new Set(gameEvents.values())];

// * delete one value from map

gameEvents.delete(64);

gameEvents.forEach((value, key) => {
  if (key < 45) {
    console.log(`FIRST HALF ${key} - ${value}`);
  } else {
    console.log(`second HALF ${key} - ${value}`);
  }
});
