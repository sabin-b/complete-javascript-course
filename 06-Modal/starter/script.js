'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-modal');
let showModalBtns = document.querySelectorAll('.show-modal');

for (const btn of showModalBtns) {
  btn.addEventListener('click', () => {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}

// * overlay listner
overlay.addEventListener('click', () => {
  if (!overlay.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// * close btn
closeBtn.addEventListener('click', () => {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' || event.key === 'Esc') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
