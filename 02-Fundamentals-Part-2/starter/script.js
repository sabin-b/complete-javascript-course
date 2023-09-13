'use strict';

// * array example - 1
// let fullName = "sabin";
// let examplearray = [fullName, 15 + 20];

// console.log(examplearray);

// * array methods

function calculateval(arrayvalue) {
  for (const val of arrayvalue) {
    console.log(val + 1);
  }
}

calculateval([10, 20, 30]);

// * add elements

// * push
let examplearray = ['12', '25', '52'];
examplearray.push('sabin');
console.log(examplearray);

// * unshift
let exampleArray1 = ['guava', 'papaya'];
exampleArray1.unshift('hello');
console.log(exampleArray1);

// * remove elements

// * pop()
examplearray.pop(); //* last
console.log(examplearray);

// * shift()
exampleArray1.shift(); //* first
console.log(exampleArray1);

// * check that value exist or not

// * indexof()
console.log(exampleArray1.indexOf('guava'));

// * includes()
console.log(exampleArray1.includes('guava'));

// * object inside of function calling
let exampleObject = {
  calcAge: function () {
    console.log('function called');
  },
};

// *function calling like this
exampleObject['calcAge']();
exampleObject.calcAge();

// * this key word examples

let exampleObject2 = {
  fullName: 'sabin',
  greet: function () {
    this.msg = `hlo ${this.fullName}`;
    return this.msg;
  },
};

console.log(exampleObject2.greet());
console.log(exampleObject2.msg);
console.log();
