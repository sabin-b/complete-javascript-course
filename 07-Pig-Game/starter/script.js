'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// * score elements
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// * intial value set to  0 and hidden
score0El.textContent = 0;
score1El.textContent = 0;
diceImage.classList.add('hidden');

// * current score updating value
let currentScore, activeplayer, scores, isPlaying;

function initialValue() {
  currentScore = 0;
  activeplayer = 0;
  scores = [0, 0];
  isPlaying = true;
}

initialValue();

// * swicth player function
let switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--active');
  activeplayer = activeplayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add('player--active');
  currentScore = 0;
};

// * btnRoll listner function
btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    // * display random dice number
    let dice = Math.trunc(Math.random() * 6) + 1;

    // * display dice image remove hidden class
    diceImage.classList.remove('hidden');

    // * change dice image based on the dice number
    diceImage.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // * current score updating
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// * hold button listner
btnhold.addEventListener('click', () => {
  if (isPlaying) {
    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    // * check if active player score >= 100

    if (scores[activeplayer] >= 20) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      isPlaying = false;
      diceImage.classList.add('hidden');
    } else {
      // * switch player
      switchPlayer();
    }
  }
});

// * new game button listner

btnNew.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');

  // * call initial function
  initialValue();
});
