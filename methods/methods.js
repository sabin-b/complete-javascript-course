'use strict';

// ** array methods

// * add last element to array

// * push()

// * remove last element to array

// * pop()

// * add first element to array

// * unshift()

// * remove first element to array

// * shift()

// * check element index

// * indexof()

// * hints
/*




*/
/* 
regular func will refer object ,will use this key word

arrow function will refer this.key word window object
*/

let exampleobj = {
  firstName: 'sabin.b',
  greet: function () {
    console.log(this.firstName);

    // * function declartaion

    function message2() {
      //   console.log(this.firstName); // it will throw error
    }

    message2();

    // * arrow function will here it doesn't refer window object it will refer the object
    let message = () => console.log(this.firstName);

    message();
  },
};

exampleobj.greet();
/*




*/
// * arguements keyword

// * func declaration has arguements keyword
function examplefunc(a, b) {}

// * arrow func has no arguements keyword
let examplefunc2 = () => {};
/*




*/
// * primitive types each value will task seperate memory

let age = 30;
let friendAge = age;
friendAge = 50;
console.log(age, friendAge);
/*




*/
// * objects reference
let person = {
  name: 'sabin',
  age: 25,
};

console.log(person);

let person2 = person;
person2.age = 35;
console.log(person2, person);
/*




*/
// * object copy

let demoobject = {
  firstName: 'kathara',
  place: 'chennai',
};

let democheck2 = Object.assign({}, demoobject); // second level object it won't full copy exact object ,it will refer parent object
// * it will create own memory for this object in heap
democheck2.firstName = 'leo';

// * see the results
console.log(democheck2.firstName, demoobject.firstName);

/*
 * short circuiting
 *
 *
 */
// * first value is false move to second value
console.log('d' || 'h');

// * first value is false doesn't move to second value
console.log('' && 'hell');

/*
 * nullish collasingh operator ( it will only work in null values and undefinded)
 *
 *
 */

let nullishExample = null;
// console.log(nullishExample ?? 10);

nullishExample ??= 20;
console.log(nullishExample);

/*
 *optional chaining operator ( it will only work in null values and undefinded)
 *
 *
 */

let arrayTest = [
  {
    fullName: 'sabin.b',
    category: 'developer',
  },
];

console.log(
  arrayTest[0]?.fullName,
  arrayTest[0]?.getdata ?? "method doesn't exist"
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

for (const i of itemSet.keys()) {
  console.log(i);
}

// * checking numbers
// * parsing
console.log(Number.parseFloat('50.5px')); //* get num value only from measurements
console.log(Number.parseInt('50.5'));
console.log(Number.isFinite(50.5)); //* check the value is num or not

// * to fixed
let ex = 1000;
ex.toFixed(1);
console.log(ex);
console.log('d');
