'use strict';

// * bookings function
let bookings = [];
let createBooking = function (flightname, numPassengers, price = 2500) {
  let booking = {
    flightname,
    numPassengers,
    price,
  };

  console.log(booking);
  // * push to array
  bookings.push(booking);
};

createBooking('LH206', null);

// * reference object first example
// * second example
let flight = 'lh2026';
let jonas = {
  name: 'jonas',
  passPort: 2500132355,
};

let clonejonas = { ...jonas };
console.log(jonas);

function newPassbook(person) {
  person.passPort = Math.trunc(Math.random() * 100000);
}

newPassbook(clonejonas);

console.log(clonejonas);

// * first class functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

let upperFirstWord = function (str) {
  let [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// * high order functions
let transformer = function (str, func) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${func(str)}`);
  console.log(`transformed by ${func.name}`);
};

transformer('java is the best programming language', upperFirstWord);
transformer('java is the best programming language', oneWord);

// * functions returns another functions

let greetMsg = message => {
  return name => {
    console.log(`hlo ${name} , ${message}`);
  };
};

let greetFunc = greetMsg('Good Evening');

greetFunc('sabin');

// * two functions calling at a time
greetMsg('Good Morning')('sajin');

// * call and apply methods
let lufthansa = {
  airline: 'lufthansa',
  iataocode: 'LH',
  bookings: [],
  book: function (flightnum, name) {
    console.log(
      `${name} booked a seat in ${this.airline} flight ${this.iataocode} : ${flightnum}`
    );
    this.bookings.push({
      flight: `${flightnum}-${this.iataocode}`,
      name,
    });
  },
};

lufthansa.book(256, 'sabin');

// this code not work
let bookFunc = lufthansa.book;

let eurowings = {
  airline: 'eurowings',
  iataocode: 'LH',
  bookings: [],
};

let airindia = {
  airline: 'airindia',
  iataocode: 'AI',
  bookings: [],
};

// * assign a function to another object rquements should pass invidual array
bookFunc.call(eurowings, 240, 'sajin');

// * arquements should pass like array, and it will call that function
bookFunc.apply(airindia, [250, 'jawar']);

// * it will create new function
let bookEw = bookFunc.bind(airindia);
bookEw('256', 'sarthar');

function print() {
  console.log('hello world', this);
}

let printHello = print.bind(airindia);
printHello();

let bookAi = bookFunc.bind(airindia, 250);

bookAi('hello new method');

// *
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};
// lufthansa.buyPlane();
// document.querySelector('.buy').addEventListener('click', function () {
//   lufthansa.buyPlane();
// });
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// * add tax method

let addTax = function () {
  return function (rate, value) {
    let calculate = value + value * rate;
    console.log(calculate);
  };
};

let addVat = addTax().bind(null);
addVat(0.23, 500);

// coding challenge

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let inputValue = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`
      )
    );
    console.log(inputValue, typeof inputValue);
    // * input push to array
    if (inputValue === 0) {
      this.answers[inputValue] += inputValue + 1;
    } else {
      this.answers[inputValue] += inputValue;
      console.log(this.answers);
    }
    this.displayResults();
  },
  displayResults: function () {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// * self invoking function

(function () {
  console.log('hello world');
})();

(() => console.log('hello world'))();

// * closures
const secureBooking = function () {
  let passengerCount = 0;
  return function (str) {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

let booker = secureBooking();
booker();

// setTimeout(function (params) {
//   console.log('hello world time out');
// }, 300);

let boardPassengers = function (n, wait) {
  let pergroup = n / 3;
  setTimeout(function () {
    console.log(`now we are boarding all ${n} passengers`);
    console.log(`there are three groups ${pergroup}`);
  }, wait * 1000);
  console.log('will start onboarding');
};

boardPassengers(100, 3000);

// * closure coding challenge
(function () {
  let header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
