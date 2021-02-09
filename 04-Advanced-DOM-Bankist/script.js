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

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////
/////////////

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');

// console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'text <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });

// Style
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(getComputedStyle(message));
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const logo = document.querySelector('.nav__logo');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  // const s1coords = section1.getBoundingClientRect();

  // old method
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
