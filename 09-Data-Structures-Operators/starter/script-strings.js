'use strict';

let airline = 'TAP Air Portugal';

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(-1));

let collapsedEmail = ' sabiN@hdkjdkhjgmail.com';
let acceptedemail = collapsedEmail.toLowerCase().trim();
console.log(acceptedemail);

const priceGB = '288,97£';
const priceUS = priceGB.replaceAll();
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

function airportCustomerCheck(items) {
  let converted = items.toLowerCase();
  if (converted.includes('knife') || converted.includes('gun')) {
    console.log('you are not allowed');
  } else {
    console.log('you are welcome');
  }
}

airportCustomerCheck('I have a laptop, some Food and a pocket Knife');
airportCustomerCheck('Socks and camera');
airportCustomerCheck('Got some snacks and a gun for protection');

// * split method
console.log('a+very+nice+string'.split('+'));

// * join

let splitedArray = 'a+very+nice+string'.split('+');
console.log(splitedArray.join('-'));

// * capitalize the name

function capitailzeNames(name) {
  let theirName = name.split(' ');
  let convertedNames = [];
  for (const eachname of theirName) {
    // let capitailze = eachname[0].toUpperCase() + eachname.slice(1);
    let capitailze = eachname.replace(eachname[0], eachname[0].toUpperCase());
    convertedNames.push(capitailze);
  }
  console.log(convertedNames.join(' '));
}

capitailzeNames('jessica ann smith davis');

capitailzeNames('sabin akshaya');

// * creditCardNum mask model
function numberMask(number) {
  let str = String(number);
  let lastStr = str.slice(-4);
  console.log(lastStr.padStart(str.length, '*'));
}

numberMask(1002364548745);

// let iceMan = 'ice' * 2;
// console.log();
const str = '';

const repeatedStr = str * 3;
console.log(repeatedStr);

// * coding challenge
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

let submitBtn = document.querySelector('button');
let textArea = document.querySelector('textarea');

submitBtn.addEventListener('click', () => {
  let userValues = textArea.value;
  let StringstoArray = userValues.split('\n');
  console.log(StringstoArray);
  for (const [num, sentence] of StringstoArray.entries()) {
    // let trimedString = sentence.toLowerCase().trim().split('_');
    // let secondLetter =
    //   trimedString[1][0].toUpperCase() + trimedString[1].slice(1);
    // let firstLetter = trimedString[0]
    // let finalSentence = firstLetter.concat(secondLetter);
    // console.log(`${finalSentence}     ${'✅'.repeat(num + 1)}`);

    // * method 2
    let [firstSentence, secondSentence] = sentence
      .toLowerCase()
      .trim()
      .split('_');
    let output = `${firstSentence}${secondSentence.replace(
      secondSentence[0],
      secondSentence[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(num + 1)}`);
  }
});

/*
first_name
Some_Variable 
 calculate_AGE
delayed_departure
*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  // console.log(type, from, to, time);
  let output = `${type.startsWith('_Delayed') ? '🛑' : ' '} ${type
    .replaceAll('_', ' ')
    .trim()} ${from.slice(0, 3)} ${to.slice(0, 3)} ${time.replace(':', 'h')}`;
  console.log(output.padStart(36, ' '));
}
