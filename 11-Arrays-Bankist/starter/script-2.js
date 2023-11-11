'use strict';

// * forof loop example

for (const movement of movements) {
  if (movement > 0) {
    console.log(movement);
  } else {
    console.log(Math.abs(movement));
  }
}

// * foreach loop example
console.log('foreach loop example with Map');
movements.forEach((value, index, arr) => {
  console.log(value > 0 ? `deposit : ${value}` : `debited : ${value}`);
  console.log(arr);
});

console.log('foreach loop example set');
let exampleSet = new Set(['helo', 'mark', 'antony']);
exampleSet.forEach((e, i) => {
  console.log(e, i);
});

// * map width foreach
console.log('----map width foreach---');

// * skip parameter with _
currencies.forEach((currency, _, arr) => {
  console.log(currency, arr);
});

let arr = ['a', 'b', 'c', 'd'];

/*
 * these methods doesn't mutate parent arrays
 * instead of these methods create a array
 */

// * slice()
arr.slice(); //* this code create same copy of parent array
console.log(arr.slice(2));
console.log(arr.slice(0, 2));
console.log(arr.slice(-1));

// * concat
let mergeArray = arr.concat([25, 50, 30]);
console.log(mergeArray);
console.log([...arr, ...[25, 50, 30]]);

console.log(arr.join(''));

/*
 * these methods does mutate parent arrays
 *
 */

// * splice
arr.splice(-1);
console.log(arr);

arr.splice(1, 0, 'demo', 'darling');
console.log(arr);

// * reverse()
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// *new method
let arr3 = [20, 100, 250, 600];
console.log(arr3.at(0));

// * last lement gettig from array
console.log(arr3.slice(-1)[0]);
console.log(arr3[arr3.length - 1]);
console.log(arr3.at(-1));

// * reverse the string
let exampleStringReverse = 'we have come to canada';
let reversedString = exampleStringReverse.split(' ').reverse().join(' ');
console.log(reversedString);

let examplestring = 'jessica david';
let [firstSentence, secondSentence] = examplestring.split(' ');
let splitedString = [firstSentence.at(0), secondSentence.at(0)].join('');
console.log(splitedString);

// * coding challenge
function checkDogs(julialist, katelist) {
  let dogsJulia = julialist;
  let dogsKate = katelist;
  let julia = dogsJulia.slice();
  julia.shift();
  julia.splice(julia.length - 2, 2);
  const dogs = dogsKate.concat(julia);

  // * condition check
  dogs.forEach(function (age, i) {
    if (age < 3) {
      console.log(`Dog number ${i + 1} is still a puppy `);
    } else {
      console.log(`Dog number  ${i + 1}
      is an adult, and is ${age} years old`);
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// *map method

let methodMap = movements.map((value, index) => Math.trunc(value * 1.1));

console.log(methodMap);

let movementsToUsdFor = [];
for (const mov of movements) {
  movementsToUsdFor.push(mov * 1.1);
}
console.log(movementsToUsdFor);

// * postive values
let filterArray = movements.filter(function (mov) {
  return mov > 1000;
});

console.log(filterArray);

// * negative values
let filterWithDrawal = movements.filter(mov => mov < 0);
console.log(filterWithDrawal);

// * reduce method
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// 8 rather than use reduce method
let reduceExample = movements.reduce((acc, curr, i) => acc + curr, 0);
console.log(reduceExample);

// * continue from reduce method 9.52

// * max value finding
let max = movements.reduce((acc, curr) => {
  if (acc > curr) {
    console.log(acc, curr);
    return acc;
  } else {
    console.log(curr);
    return curr;
  }
}, movements[0]);

console.log(max);

// * coding challenge 1

let calcAverageHumanAge = function (ages) {
  let humanAges = ages
    .map(function (age, index) {
      if (age <= 2) {
        return 2 * age;
      } else {
        return 16 + age * 4;
      }
    })
    .filter((value, index) => value >= 18);
  let reduceMethod = humanAges.reduce((acc, val, _, arr) => {
    return acc + val / arr.length;
  }, 0);

  return humanAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// let exampleArray = [5, 2, 4, 1, 15, 8, 3].reduce();

let calcAverageHumanAge2 = ages => {
  let humanAges = ages
    .map(function (age, index) {
      if (age <= 2) {
        return 2 * age;
      } else {
        return 16 + age * 4;
      }
    })
    .filter((value, index) => value >= 18)
    .reduce((acc, val, _, arr) => {
      return acc + val / arr.length;
    }, 0);
  return humanAges;
};

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

for (const acc of accounts) {
  if (acc.userName === 'js') console.log(acc);
}
