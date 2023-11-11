'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn, index) => {
  btn.addEventListener('click', openModal);
});
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* hero section btn scroll start*/
let heroSecBtn = document.querySelector('.btn--scroll-to');
let section1 = document.getElementById('section--1');

heroSecBtn.addEventListener('click', function () {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

/* hero section btn scroll end / */

/* heder section nav link scroll start */

let navLinks = document.querySelectorAll('.nav__link');

//* normal function
// navLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     let idVal = this.getAttribute('href');
//     let currentEl = document.querySelector(idVal);
//     currentEl.scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

//* event delegation best practice
let listParent = document.querySelector('.nav__links');

listParent.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    let idVal = e.target.getAttribute('href');
    let currentEl = document.querySelector(idVal);
    currentEl.scrollIntoView({
      behavior: 'smooth',
    });
  }
});
/* header section nav link scroll end / */

//* practice dom traversal

let h1 = document.querySelector('h1');
console.log(h1.childNodes);
console.log(h1.children);

//* getting first child //like node elements
console.log(h1.firstChild);
//* getting first elemnt child
// h1.firstElementChild.style.color = '#fff';

//* getting last elemnt child
// h1.lastElementChild.style.color = 'yellow';

//* parent getting
h1.parentElement;
h1.parentNode;

//* closest method getting only parent element
// let close = (h1.closest('.header').style.backgroundColor = 'aliceblue');
console.log(close);

console.log(h1.previousElementSibling);
console.log(h1.previousSibling);

console.log(h1.nextElementSibling);
console.log(h1.nextSibling);

// let parentOfH1 = Array.from(h1.parentElement.children);
// parentOfH1.forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.7)';
//   }
// });

//* tab component
let tabBtns = document.querySelectorAll('.operations__tab');
let tabContainer = document.querySelector('.operations__tab-container');
let tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  let clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabBtns.forEach(function (tab, i) {
    tab.classList.remove('operations__tab--active');
    tabContent[i].classList.remove('operations__content--active');
  });
  clicked.classList.add('operations__tab--active');
  // console.log(clicked.getAttribute('data-tab'));
  document
    .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});

// * navigation opocity animation

let mouseEnter = function (e) {
  if (e.target.classList.contains('nav__link')) {
    let link = e.target;

    let opacity = this;
    let siblings = link.closest('.nav').querySelectorAll('.nav__link');
    let logo = link.closest('.nav').querySelector('img');
    console.log(this);
    // * adding opocity
    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

let mainNav = document.querySelector('.nav');
mainNav.addEventListener('mouseover', mouseEnter.bind(0.5));

mainNav.addEventListener('mouseout', mouseEnter.bind(1));

let section_1 = document.getElementById('section--1');
/*
//* sticky navigation

window.addEventListener('scroll', function () {
  let section_coords = section1.getBoundingClientRect();
  console.log(section_coords.top);
  if (window.scrollY > section_coords.top) {
    mainNav.classList.add('sticky');
  } else {
    mainNav.classList.remove('sticky');
  }
});*/
// * sticky navigation with observer api

// let obsCallback = function (entries, observer) {
//   entries.forEach(function (entry) {
//     console.log(entry);
//   });
// };

// let obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// let observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section_1);

let header = document.querySelector('.header');

let navHeight = mainNav.getBoundingClientRect().height;
let headerObserver = new IntersectionObserver(
  function (entries, observer) {
    let [entry] = entries;
    if (!entry.isIntersecting) {
      mainNav.classList.add('sticky');
    } else {
      mainNav.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  }
);
headerObserver.observe(header);

// * section animation with intersectionobserver api
const allSections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    let [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
  }
);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// * picture lazy loading
let allLazyImages = document.querySelectorAll('img[data-src]');
let imageObserver = new IntersectionObserver(
  function (entries, observer) {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    let imageurl = entry.target.dataset.src;
    console.log(imageurl);
    entry.target.src = imageurl;
    entry.target.addEventListener('load', () =>
      entry.target.classList.remove('lazy-img')
    );
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '200px',
  }
);

allLazyImages.forEach(image => imageObserver.observe(image));

//* slider area
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const maxlength = slides.length - 1;
// let slider = document.querySelector('.slider');
// slider.style.overflow = `visible`;
// slider.style.transform = 'scale(0.3) translateX(-1000px)';
const slideBtnLeft = document.querySelector('.slider__btn--left');
const slideBtnright = document.querySelector('.slider__btn--right');
let dotContainer = document.querySelector('.dots');

// 0,100,200,300
// * dots creation
let createDot = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button type="button" class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDot();

// * activate dot
let activateDot = function (slide) {
  let allDots = document.querySelectorAll('.dots__dot');
  allDots.forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide = "${slide}" ]`)
    .classList.add('dots__dot--active');
};

activateDot(0);

// * next slide
let gotoNextslide = function (currentSlide) {
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
};

let nextslide = function () {
  // * increment the current slide
  if (currentSlide === maxlength) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  gotoNextslide(currentSlide);
  activateDot(currentSlide);
};

slideBtnright.addEventListener('click', nextslide);

let previousslide = function () {
  if (currentSlide === 0) {
    currentSlide = maxlength;
  } else {
    currentSlide--;
  }
  gotoNextslide(currentSlide);
  activateDot(currentSlide);
};

slideBtnLeft.addEventListener('click', previousslide);

// * keyborad events
document.addEventListener('keydown', function (e) {
  // * if conditions
  if (e.key === 'ArrowLeft') previousslide();
  // * short circuiting
  e.key === 'ArrowRight' && nextslide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    let { slide } = e.target.dataset;
    gotoNextslide(slide);
    activateDot(slide);
  }
});
/*

//* practice
console.log(document.documentElement);

//* creating a element with javascript
let messageBox = document.createElement('div');
//* adding class name
messageBox.classList.add('cookie-message-box');
//* adding text
messageBox.innerHTML = `hello we have added a div with js <button class="btn btn--close-cookie">Got it!</button>`;

//* show dom elements in ui
document.querySelector('header').prepend(messageBox);

//* dom elements we don't show multiple places because that are unique
document.querySelector('header').append(messageBox);

//* clone the element and show multiple places
document.querySelector('header').append(messageBox.cloneNode(true));

//* show before the selected element
document.querySelector('header').before(messageBox);

//* show after the selected element
document.querySelector('header').after(messageBox);

//* removing elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  * new method
  messageBox.remove();
  //* old method
  console.log(messageBox.parentElement.removeChild(messageBox));
});

//* style

//* inline styles
messageBox.style.backgroundColor = 'red';
messageBox.style.width = '100%';

console.log(messageBox.style.backgroundColor);

//* get all the styles from that elements
console.log(getComputedStyle(messageBox));

messageBox.style.height =
  Number.parseFloat(getComputedStyle(messageBox).height, 10) + 10 + 'px';

//* css variable property
document.documentElement.style.setProperty('--color-primary', 'red');

//* get attribute
let logo = document.querySelector('.nav__logo');

//* relative path
console.log(logo.src);
//* absolute path
console.log(logo.getAttribute('src'));

//* setattribute
logo.setAttribute('author_name', 'sabin');

//* custom attribute
console.log(logo.getAttribute('author_name'));

//* data varibales value getting
console.log(logo.dataset.myName);

//* don't use that
logo.className = 'hlo';
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////////
//* scrolling effects
let scrollBtn = document.querySelector('.btn--scroll-to');
let section_1 = document.getElementById('section--1');

scrollBtn.addEventListener('click', e => {
  let s1coords = section_1.getBoundingClientRect();
  console.log(s1coords.height, s1coords.left);
  console.log(e.target.getBoundingClientRect());

  //* current scroll
  /*console.log(`window scroll: ${window.pageXOffset}: ${window.pageYOffset}`);

  //* viewport
  console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //* scroll adding old way
  window.scrollTo({
    left: s1coords.left * window.pageXOffset,
    top: s1coords.top * window.pageYOffset,
    behavior: 'smooth',
  });

  //* new way
  section_1.scrollIntoView({ behavior: 'smooth' });
});

//* remove listners
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

//* new way
h1.addEventListener('mouseenter', alertH1);

//* old way
h1.onmouseenter = function (e) {
  alert('onmouseenter: Great! You are reading the heading :D');
};

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000);

function getRandomNum(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

let randomRgb = function () {
  return `rgb(${getRandomNum(0, 255)},${getRandomNum(0, 205)},${getRandomNum(
    0,
    155
  )})`;
};

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('link - grand parent');
  console.log(e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('link - nav parent');
  console.log(e.target, e.currentTarget);
});

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('link');
  this.style.backgroundColor = randomRgb();
  console.log(e.target, e.currentTarget);

  //* stop event propagation
  e.stopPropagation();
  console.log(this);
});

*/

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log('h');
});

// const targetElement = document.querySelector('.cookie-open'); // * target element class name or id
// let chatbotwiget = document.getElementById('CookiebotWidget');

// targetElement.addEventListener('click', function (e) {
//   e.preventDefault();
//   chatbotwiget.classList.add('CookiebotWidget-open');
// });

// let blogLoop = document.querySelector(
//   '.blog-carousel .elementor-loop-container'
// );
// console.log(blogLoop);

blogLoop.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('elementor-widget-wrap')) {
    let targetslide = e.target.closest('.elementor-section');
    let siblingslides = targetslide
      .closest('.swiper-wrapper')
      .querySelectorAll('.swiper-slide .elementor-section');
    siblingslides.forEach(function (el) {
      if (el !== targetslide) {
        el.style.opacity = '0.7 !important';
      }
    });
  }
});

blogLoop.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('elementor-widget-wrap')) {
    let targetslide = e.target.closest('.elementor-section');
    let siblingslides = targetslide
      .closest('.swiper-wrapper')
      .querySelectorAll('.swiper-slide .elementor-section');
    siblingslides.forEach(function (el) {
      if (el !== targetslide) {
        el.style.opacity = '0.7 !important';
      }
    });
  }
});
