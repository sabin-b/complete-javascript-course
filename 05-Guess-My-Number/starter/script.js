'use strict';

let inputBox = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let messageText = document.querySelector('.message');
let score = document.querySelector('.score');
let againBtn = document.querySelector('.again');
let highlightScoretext = document.querySelector('.number');
let body = document.querySelector('.body');

// * generating random number
let randomNumber = Math.trunc(Math.random() * 6) + 1;

// * high score value
let highscoreText = document.querySelector('.highscore');
let highScore = 0;

function messagePrint(text) {
  messageText.textContent = text;
}

let userChance = 3;

// * function
checkBtn.addEventListener('click', function () {
  console.log(randomNumber);
  let userValue = parseInt(inputBox.value);
  if (userChance > 0) {
    if (userValue > 0) {
      if (userValue === randomNumber) {
        highlightScoretext.textContent = userValue;
        messagePrint('correct Answer 🎉');
        //   score.textContent = userValue;
        body.style.backgroundColor = '#60b347';
        body.style.transition = '0.5s';
        highlightScoretext.style.width = '30rem';
        highlightScoretext.style.transition = '0.5s';
        if (userValue > highScore) {
          highScore = userValue;
          highscoreText.textContent = highScore;
        }
      } else if (userValue > randomNumber) {
        messagePrint('Number is high 😜');
        userChance--;
        score.textContent = userChance;
        console.log(userChance);
      } else {
        messagePrint('Number is to low 😢');
        userChance--;
        score.textContent = userChance;
        console.log(userChance);
      }
    } else {
      messagePrint('No Number !!!');
    }
  } else {
    messagePrint('sorry,you have tried many times');
    inputBox.value = '';
  }
});

// * again btn listner
againBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  inputBox.value = '';
  userChance = 3;
  messagePrint('Start guessing...');
  body.style.backgroundColor = '#222';
  highlightScoretext.textContent = '?';
  score.textContent = 20;
});
