'use strict'

const books = document.querySelector('.books');
const bookCollection = document.getElementsByClassName('book');
const book1 = bookCollection[1];
const book2 = bookCollection[0];
const book3 = bookCollection[4];
const book4 = bookCollection[3];
const book5 = bookCollection[5];
const book6 = bookCollection[2];

const body = document.body;

const book3Title = book3.querySelector('h2');

const advertising = document.querySelector('.adv');

const book2Lists = book2.querySelectorAll('li');
const book5Lists = book5.querySelectorAll('li');

const book6Chapter8 = document.createElement('li');
const book6Lists = book6.querySelectorAll('li');

//ex.1
books.prepend(book1);
books.append(book6);
book4.before(book3);

//ex.2
body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

//ex.3
book3Title.innerHTML = 'Книга 3. this и Прототипы Объектов';
book3Title.style.color = 'darkkhaki';

//ex.4
advertising.remove();

//ex.5
book2Lists[10].before(book2Lists[2]);
book2Lists[9].before(book2Lists[7]);
book2Lists[4].before(book2Lists[6], book2Lists[8]);

book5Lists[1].after(book5Lists[9]);
book5Lists[9].after(book5Lists[3], book5Lists[4]);
book5Lists[8].before(book5Lists[5]);

//ex.6
book6Chapter8.innerHTML = 'Глава 8: За пределами ES6';
book6Lists[8].after(book6Chapter8);

