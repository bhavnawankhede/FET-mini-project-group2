'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault(); // prevents the page jumping up
  // modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
  window.location.href = 'admin.html';
};

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// Two buttons :: 2 ways to open modal : Open Account/Open your free account today!(@ bottom)
btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// 1 :: Smooth-Scroll to Features

// <button class="btn--scroll-to"> [ Learn More ↓ ]

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////// 2 :: Event Handling ///////////////////////////////////

/////////////////////////////////////////// 3 :: Navbar scrolling ///////////////////////////////////

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target); // shows the element(link) which is clicked
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id); // shows the link which is clicked
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////// 4 :: Tab Component ///////////////////////////////////
/// 6 Tips

const tabs = document.querySelectorAll('.operations__tab'); // All 3 buttons
const tabsContainer = document.querySelector('.operations__tab-container'); // Container for buttons
const tabContent = document.querySelectorAll('.operations__content '); // All 3 changing tabs

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // finds closest parent with same class name
  console.log(clicked); // other than 3 buttons, it shows null

  if (!clicked) return;

  // Remove active classes
  tabs.forEach(function (t) {
    t.classList.remove('operations__tab--active'); // moves the other tab(button) downwards
  });
  tabContent.forEach(function (c) {
    c.classList.remove('operations__content--active');
  });

  // Active tab
  clicked.classList.add('operations__tab--active'); // moves the clicked tab(button) upwards

  // Activate Content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`) // accessing data attribute
    .classList.add('operations__content--active');
});

/////////////////////////////////////////// 5 :: Menu fade animation [ Templates  Tips Feedback ] ///////////////////////////////////

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); // All 4 elements with 'nav__link' class

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(function (el) {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

/////////////////////////////////////////// 6 :: Sticky Navigation ///////////////////////////////////

//////////////////////////////  :::::::: New way
// make nav sticky the moment header moves completely out of the view
// after header Features sections starts

const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight); // 90

const stickyNav = function (entries) {
  const [entry] = entries; // de-structuring
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headObserver.observe(header);

/////////////////////////////////////////// 7 :: Reveal elements on scroll  ///////////////////////////////////
// reveal [ section1/section2/section3 ] on scroll

// 1) 'section--hidden' :: it was only present in css, but not applied to sections
// 2) section--hidden :: class applied to all sections to hide them
// 3) remove the class as each section is approached

const allSections = document.querySelectorAll('.section'); // All 4 sections

const revealSection = function (entries, observer) {
  const [entry] = entries; // de-structuring
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // stops displaying in console
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

/////////////////////////////////////////// 8 :: Lazy Loading Images  ///////////////////////////////////

const imgTargets = document.querySelectorAll('img[data-src]'); // only the ones to be lazy-loaded
console.log(imgTargets); // list the 3 images

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px',
});

imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});

/////////////////////////////////////////// 9 :: Slider Component  ///////////////////////////////////

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

////////////////////////////////////////////// RESUME-Builder  /////////////////////////////////

// const btnLogin = document.querySelector('.nav__linkLogin--btn');
// const userNameInput = document.querySelector('.login__input--user');
// const passwordInput = document.querySelector('.login__input--pin');

// btnLogin.addEventListener('click', function (e) {
//   console.log(passwordInput.value);
//   e.preventDefault();
//   if (userNameInput.value === '') {
//     console.log('Empty');
//   } else if (
//     userNameInput.value === 'admin' &&
//     passwordInput.value === 'admin123'
//   ) {
//     console.log('Admin Login');
//     window.location.href = 'admin.html';
//   } else {
//     console.log('User Login');
//     // Window.location.href = 'user.html';
//   }
// });
