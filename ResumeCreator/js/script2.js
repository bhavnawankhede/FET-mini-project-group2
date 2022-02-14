'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault(); // prevents the page jumping up
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 2 buttons :: 2 ways to open modal : Open Account/Open your free account today!(@ bottom)
btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('header');

const message = document.createElement('div');

message.innerHTML =
  'We used a cookie to do certain things on a website <button>Got it </button>';

header.prepend(message);

// Styles
message.style.height = '50px';
message.style.backgroundColor = 'red';

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function () {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function () {
  console.log('Container');
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function () {
  console.log('Nav');
  this.style.backgroundColor = randomColor();
});

const h1 = document.querySelector('h1');

// this selects all the elements of the highlight class that are children of the h1 element
console.log(h1.querySelectorAll('.highlight')); // direct children of <h1> span.highlight, span.highlight]

// Going downwards : children
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways : siblings
// in JS only direct siblings can be accessed

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// to get all siblings : go to parent and get all the children
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

const obsCallback = function (entries, observer) {
  entries.forEach(function (entry) {
    console.log(entry);
  });
};

const obsOptions = {
  root: null, // viewport
  threshold: 0.1, // 10%
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
