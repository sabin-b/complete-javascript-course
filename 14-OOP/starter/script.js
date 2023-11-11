'use strict';

/*
 *
 * constructor functions
 */

let Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

let jonas = new Person('sabin', '1998');

let matilda = new Person('matilda', '2000');
let jack = new Person('jack', '2000');

console.log(jonas);
console.log(matilda);

// console.log(jonas.calcage());

/* 
1) empty object created
2) function called pointed to this
3) object linked to prototype
4) function automatically new object

*/

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthyear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ == Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

console.log(jonas);

// * property adding
Person.prototype.species = 'homo shepiens';

console.log(Person.hasOwnProperty('species'));
console.log(jonas.__proto__.__proto__);

let blogLoop = document.querySelector(
  '.blog-carousel .elementor-loop-container'
);

// blogLoop.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('elementor-widget-wrap')) {
//     let targetslide = e.target.closest('.elementor-section');
//     // console.log(targetslide);
//     let siblingslides = targetslide
//       .closest('.swiper-wrapper')
//       .querySelectorAll('.swiper-slide .elementor-section');
//     siblingslides.forEach(function (el) {
//       if (el == targetslide) {
//         el.style.opacity = 1;
//       } else {
//         el.style.opacity = 0.7;
//       }
//     });
//   }
// });

// blogLoop.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('elementor-widget-wrap')) {
//     let targetslide = e.target.closest('.elementor-section');
//     // console.log(targetslide);
//     let siblingslides = targetslide
//       .closest('.swiper-wrapper')
//       .querySelectorAll('.swiper-slide .elementor-section');
//     siblingslides.forEach(function (el) {
//       if (el == targetslide) {
//         el.style.opacity = 0.7;
//       } else {
//         el.style.opacity = 0.7;
//       }
//     });
//   }
// });

// * car

let Car = function (speed) {
  this.currentSpeed = speed;
};

Car.prototype.decrease = function () {
  return console.log((this.currentSpeed += 10));
};

Car.prototype.break = function () {
  return console.log((this.currentSpeed -= 5));
};

let bmw = new Car(120);

bmw.break();
bmw.break();
bmw.decrease();
bmw.decrease();

//* class in expression
let PersonExp = class {};

//* class in declaration

class PersonCl {
  constructor(username, birthyear) {
    this.username = username;
    this.birthyear = birthyear;
  }

  calcAge() {
    console.log(2023 - this.birthyear);
  }
}

let currentCl = new PersonCl('jonas', 1995);

currentCl.calcAge();

console.log(currentCl.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`hi ${this.username}`);
};

currentCl.greet();

// * getter and setters
const account = {
  firstName: 'jonas',
  birthyear: 20,
  movments: [10, 20, 30, 40, 5, 0],

  get latest() {
    return account.movments.slice().pop();
  },

  set latest(mov) {
    return account.movments.push(mov);
  },

  get age() {
    return 2037 - this.birthyear;
  },

  set firstName(name) {
    return (this.firstName = name);
  },
};

// * getters accessing
console.log(account.latest);

// * setter accessing
account.latest = 50;

console.log(account.movments);
console.log(account.birthyear);

console.log(account);

// * static methods
console.log(Array.from(document.querySelectorAll('h1')));

// * object.create method
let PersonProto = {
  CalcAge() {
    console.log(2023 - this.birthyear);
  },
};

let steven = Object.create(PersonProto);

steven.name = 'sabin';
steven.birthyear = 2002;

steven.CalcAge();

// * inherits with constructor function
const Person_in = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

Person_in.prototype.calculateAge = function () {
  console.log(2023 - this.birthyear);
};

const Student = function (firstName, birthyear, course) {
  // this.firstName = firstName;
  // this.birthyear = birthyear;
  Person_in.call(this, firstName, birthyear);
  this.course = course;
};

Student.prototype = Object.create(Person_in.prototype);

// console.log(Student.prototype);

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and i'm studying ${this.course} `);
};

const mike = new Student('antony Das', 2000, 'IT');

console.log(mike);

mike.introduce();
mike.calculateAge();

// * coding challenge
const Car2 = function (currentSpeed, charge) {
  this.currentSpeed = currentSpeed;
  this.charge = charge;
};

Car2.prototype.chargeBattery = function (chargeTo) {
  this.charge += chargeTo;
};

Car2.prototype.accelrate = function () {
  this.currentSpeed += 20;
  this.charge -= 1;
};

let ev = new Car2(100, 85);

ev.accelrate();
ev.chargeBattery(20);
console.log(ev.currentSpeed, ev.charge);

// * inherits in class
class StudentCl extends PersonCl {
  constructor(firstName, birthyear, course) {
    super(firstName, birthyear);
    this.course = course;
  }

  introduce() {
    console.log(
      `hello , My name is ${this.username} , and birth year is ${this.birthyear}`
    );
  }

  calcAge() {
    super.calcAge();
    console.log(`this is my name ${this.birthyear}`);
  }
}

let maven = new StudentCl('sabin', 2005, 'information technology');
console.log(maven);
maven.introduce();
maven.calcAge();

// * inherits with object.create method
let SampleObj = {
  calcAge() {
    console.log(`this is my ${this.username},and birthyear ${this.birthyear}`);
  },
  init(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  },
};

let steven1 = Object.create(SampleObj);
console.log(steven);
let studentProto = Object.create(steven);
console.log(studentProto);
