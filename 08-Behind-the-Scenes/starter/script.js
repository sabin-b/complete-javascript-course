'use strict';

console.log(this);

let example = () => console.log(this);

example();

let example2 = function () {
  console.log(this);

  let example3 = () => console.log(this);

  example3();
};

example2();

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

// * arguements keyword

// * func declaration has arguements keyword
function examplefunc(a, b) {}

// * arrow func has no arguements keyword
let examplefunc2 = () => {};

// * primitive types each value will task seperate memory

let age = 30;
let friendAge = age;
friendAge = 50;
console.log(age, friendAge);

// * objects reference
let person = {
  name: 'sabin',
  age: 25,
};

console.log(person);

let person2 = person;
person2.age = 35;
console.log(person2, person);

// * object copy

let demoobject = {
  firstName: 'kathara',
  place: 'chennai',
};

let democheck2 = Object.assign({}, demoobject);
// * it will create own memory for this object in heap
democheck2.firstName = 'leo';

// * see the results
console.log(democheck2.firstName, demoobject.firstName);
