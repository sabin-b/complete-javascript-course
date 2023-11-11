let formbtn = document.querySelector(".submit-btn");
let options = document.querySelector("#dropdown");

formbtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(options.value);
});

// * form end

// * execise # 1
let country = "india";
let continent = "asia-aa";
let population = "6 million";

let age = [25, 30, 350, "hh"];

age.forEach(function (val, index) {
  console.log(val);
});

let userBirthDate = 1998;

let correctAgeFinder = function (birthYear) {
  const getCurrentYear = new Date().getFullYear();
  const userCurrentAge = getCurrentYear - birthYear;

  return userCurrentAge;
};

let getuserage = correctAgeFinder(userBirthDate);

console.log(`My Age is ${getuserage}`);

// * string concat
let combinedString = continent.split("-");
console.log(combinedString);

// * execise #2

let calculateBmi = function (mass, height) {
  let bmi = mass / (height * height);
  return bmi;
};

const bmiMark = calculateBmi(78, 1.69);
const bmiJohn = calculateBmi(92, 1.95);

const markHigherBMI =
  bmiMark.toFixed(2) > bmiJohn.toFixed(2)
    ? "mark has higher bmi"
    : "john has higher bmi";
console.log(markHigherBMI);

// * approved driving licence

const licenseApprover = (age) => {
  if (age >= 18) {
    return console.log("you license will approve soon");
  } else {
    return console.log("sorry, you don't have enough age, to apply license");
  }
};

let john = licenseApprover(17);

//* type coercion

console.log("15" - "25");

// * truthy falsey

// falsy  = '',0,Null,undefinded,NaN

// * equality operator

//  == - it will accept one number and string variable

//  === it will accept one same type

// * challenge #3

function challenge(scores) {
  let allScores = scores;
  let sum = 0;
  allScores.forEach((value, index) => {
    sum += value;
  });
  return sum / 3;
}

let scoreDolphins = challenge([96, 108, 89]);

let scoreKoalas = challenge([88, 91, 110]);

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreKoalas > scoreDolphins) console.log("Koalas win the trophy");
else console.log("Both win the trophy");

// * switch statement

// * continue from 27 session

// * te
