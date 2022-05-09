'use strict';

// Selecting Elements
const navbar = document.querySelector('.nav__links');
const nav = document.querySelector('nav');
const section = document.querySelectorAll('section');
console;
const mousea = document.querySelector('.mousea');
// Functions

// smooth scrolling

const smoothScroll = e => {
  e.preventDefault();
  if (e.target.classList.contains('links')) {
    const hrefs = e.target.getAttribute('href');
    document.querySelector(hrefs).scrollIntoView({ behavior: 'smooth' });
  }
};

// sticky navbar

const stickyNav = () => {
  nav.classList.toggle('sticky', window.scrollY > 0);
};

// mouse scroll

// Event handlers

mousea.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('mousea')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

navbar.addEventListener('click', smoothScroll);
window.addEventListener('scroll', stickyNav);
