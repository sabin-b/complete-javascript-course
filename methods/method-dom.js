/**
 * html collection return
 * getElementsByClassName()
 * getElementsByTagName()
 *
 *
 */

// * creating a element with javascript
let messageBox = document.createElement('div');
// * adding class name
messageBox.classList.add('cookie-message-box');
// * adding text
messageBox.innerHTML = `hello we have added a div with js <button class="btn btn--close-cookie">Got it!</button>`;

// * show dom elements in ui
// document.querySelector('header').prepend(messageBox);

// * dom elements we don't show multiple places because that are unique
document.querySelector('header').append(messageBox);

// * clone the element and show multiple places
// document.querySelector('header').append(messageBox.cloneNode(true));

// * show before the selected element
// document.querySelector('header').before(messageBox);

// * show after the selected element
// document.querySelector('header').after(messageBox);

// * removing elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // * new method
  // messageBox.remove();

  // * old method
  console.log(messageBox.parentElement.removeChild(messageBox));
});

// * style

// * inline styles
messageBox.style.backgroundColor = 'red';
messageBox.style.width = '100%';

console.log(messageBox.style.backgroundColor);

// * get all the styles from that elements
console.log(getComputedStyle(messageBox));

messageBox.style.height =
  Number.parseFloat(getComputedStyle(messageBox).height, 10) + 10 + 'px';

// * css variable property
// document.documentElement.style.setProperty('--color-primary', 'red');

// * get attribute
let logo = document.querySelector('.nav__logo');

// * relative path
console.log(logo.src);
// * absolute path
console.log(logo.getAttribute('src'));

// * setattribute
logo.setAttribute('author_name', 'sabin');

// * custom attribute
console.log(logo.getAttribute('author_name'));

// * data varibales value getting
console.log(logo.dataset.myName);
