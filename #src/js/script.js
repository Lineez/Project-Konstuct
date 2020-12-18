'use strict'
// Плавный скролл (подключено)
// @@include('./_scroll-behavior.js');

// ###################### menu burger
let menu = document.querySelector('.menu');
let navList = document.querySelector('.nav__list');
let menuBurger = document.querySelector('.menu__burger');

menuBurger.addEventListener('click', () => {
	menu.classList.toggle('active');
	navList.classList.toggle('active');
	menuBurger.classList.toggle('active');
});
