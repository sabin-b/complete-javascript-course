'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// * creating movements
let displayMovements = function (movements, sorted = false) {
  let mov = sorted ? movements.slice().sort((a, b) => a - b) : movements;

  // movements
  containerMovements.innerHTML = '';
  mov.forEach((mov, i) => {
    let type = mov > 0 ? 'deposit' : 'withdrawal';
    let htmltext = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmltext);
  });
};

// displayMovements(account1.movements);

// * creating userNames
function createUserName(accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
}
createUserName(accounts);

// * updateui
function updateUI(currentAcc) {
  // * display movements
  displayMovements(currentAcc.movements);

  // * display balance
  displayBalance(currentAcc);

  // * display account activities
  calcDisplaySummary(currentAcc);
}

// * display current balance
function displayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, curr, i) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} €`;
}

// * display summary
function calcDisplaySummary(curraccount) {
  // * deposits
  let summary = curraccount.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${summary} €`;

  // * withdrawals
  let withdrawalAmount = Math.abs(
    curraccount.movements
      .filter(mov => mov < 0)
      .reduce((acc, curr) => acc + curr, 0)
  );
  labelSumOut.textContent = `${withdrawalAmount} €`;

  // * intrest calculation
  let intrestAmount = curraccount.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * curraccount.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${intrestAmount} €`;

  // let intrestcalc2 = movements.filter(mov => mov > 0);
  // console.log(intrestcalc2);
  // let afterReduce = intrestcalc2.reduce((acc, curr) => {
  //   console.log(acc, curr);
  //   return acc + (curr * 1.2) / 100;
  // }, 0);
  // console.log(afterReduce);
}

// calcDisplaySummary(account1.movements);

// * current account obj
let currentAcc;

// * function check the usernames
function loginFunc(userName, userPass) {
  currentAcc = accounts.find(
    acc => acc.userName === userName && acc.pin === userPass
  );

  if (currentAcc) {
    // * label welcome content
    labelWelcome.textContent = `Welcome Back, ${currentAcc.owner
      .split(' ')
      .at(0)}`;
    // * show the current user account details
    containerApp.classList.add('show');
    // * update the ui
    updateUI(currentAcc);
  } else {
    alert("please check the credentials, may be you don'have account");
  }
}

// implementing user login
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  // * passing values to a function
  let nameOfuser = inputLoginUsername.value;
  let userpin = Number(inputLoginPin.value);
  // * passing value
  loginFunc(nameOfuser, userpin);

  // * remove that value from ui
  inputLoginUsername.value = inputLoginPin.value = '';

  // * remove the cursor
  inputLoginPin.blur();
});

// * btn transfer
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  let amount = Number(inputTransferAmount.value);
  let receiverAccount = accounts.find(function (acc) {
    return acc.userName == inputTransferTo.value;
  });

  inputTransferTo.value = inputTransferAmount.value = '';

  // * check the valid transfer
  if (
    amount > 0 &&
    currentAcc.balance >= amount &&
    receiverAccount?.userName !== currentAcc.userName
  ) {
    // * pushing amount to accound (add & reduce)
    currentAcc.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // * update the ui
    updateUI(currentAcc);
  }
});

// * loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = Number(inputLoanAmount.value);
  // * check the conditions
  if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
    // * push loan amount to movements
    currentAcc.movements.push(amount);

    // * update the ui
    updateUI(currentAcc);

    // * reset the value input value
    inputLoanAmount.value = '';
  }
});

// * btn close
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // * check the credentials or correct or not
  if (
    currentAcc.userName === inputCloseUsername.value &&
    currentAcc.pin === Number(inputClosePin.value)
  ) {
    // * findindex method
    // let findDeleteAccountindex = accounts.findIndex(
    //   acc =>
    //
    // );
    // console.log(accounts.at(findDeleteAccountindex));

    // * for loop
    let findDeleteAccountindex;
    for (const [index, acc] of accounts.entries()) {
      if (
        acc.userName === inputCloseUsername.value &&
        acc.pin === Number(inputClosePin.value)
      ) {
        findDeleteAccountindex = index;
      }
    }

    // * delete the account from array
    accounts.splice(findDeleteAccountindex, 1);

    // * hide the movements
    containerApp.classList.remove('show');
  }
});

// * btn sort
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAcc.movements, !sorted);
  sorted = !sorted;
});

// * every method example
let exampleArray = [10, 2, 5, 62];
let result = exampleArray.every(function (num) {
  return num > 10;
});
console.log(result);

// * flat & flatmap examples
let flatExample = [10, 20, 25, [25, 25, [50, 25]]];
let [, , , [, , [a]]] = flatExample;
// console.log(flatExample.flat(2));

// * accounts array movements total value
let totalBankAmount = accounts
  .map(mov => {
    return mov.movements;
  })
  .flat()
  .reduce((acc, curr) => acc + curr);

// console.log(totalBankAmount);

// * flatmap method

let totalBankAmount2 = accounts
  .flatMap(mov => {
    return mov.movements;
  })
  .reduce((acc, curr) => acc + curr);

console.log(totalBankAmount2);

// * sort method
let examplestrings = ['rahman', 'susai', 'admire', 'desire', 'zoo'];
console.log(examplestrings.sort());
console.log(examplestrings);

// * movements array
let movementSort = movements.sort((a, b) => (a > b ? 1 : -1));
// console.log(movementSort);

console.log(movements.sort((a, b) => a - b));

// * array fill methods
let afill = new Array(7);
afill.fill(1, 0);
console.log(afill);

// *from()

let bfill = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(bfill);
let cfill = Array.from([50, 230, 2]);
console.log(cfill);

labelBalance.addEventListener('click', () => {
  let movementsui = Array.from(document.querySelectorAll('.movements__value'));
  let changesymbol = movementsui.map(el => Math.abs(Number(el.textContent)));
  console.log(changesymbol);
});

// * bankdeposit sum

let bankdepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr);
console.log(bankdepositSum);

function titleCase(sentence) {
  let exceptions = ['a', 'and', 'with', 'but'];
  let titleCase = sentence
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word)
        ? word
        : word.at(0).toUpperCase() + word.slice(1)
    );
  console.log(titleCase);
}

titleCase('i am a engineer');
titleCase("i'm a developer with designer");

// * coding challenge
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(dog => {
  dog.recommended_food_portion = dog.weight ** 0.75 * 28;
});

let findSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(findSarah);

// * 3
let ownersEatTooMuch = dogs
  .filter(dog => {
    return dog.curFood > dog.recommended_food_portion;
  })
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

let ownersEatToolittle = dogs
  .filter(dog => {
    return dog.curFood < dog.recommended_food_portion;
  })
  .flatMap(dog => dog.owners);

console.log(ownersEatToolittle);

// * 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatToolittle.join(' and ')}'s dogs eat too much!`);

// * 5
console.log(dogs.some(dog => dog.curFood === dog.recommended_food_portion));

// * 6
let checkdogs = dog =>
  dog.curFood > dog.recommended_food_portion * 0.9 &&
  dog.curFood < dog.recommended_food_portion * 1.1;

let okay = dogs.some(checkdogs);

// * 7
let anothercheck = dogs.filter(checkdogs);
console.log(anothercheck);

// * 8
let sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommended_food_portion - b.recommended_food_portion);
console.log(sortedDogs);

console.log(movements.sort((a, b) => (a > b ? 1 : -1)));
