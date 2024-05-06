'use strict';
console.log('a');

let ligazon = document.querySelectorAll('a').length;
console.log(ligazon);

console.log('b');
let ligazon2 = document.querySelectorAll('a');

console.log(ligazon2[ligazon2.length - 2].href);

console.log('c');
let ligazon3 = document.querySelectorAll('[href="http://proba"]');
console.log(ligazon3.length);

console.log('d');
let ligazon4 = document.querySelectorAll('p')[2];
console.log(ligazon4.querySelectorAll('a').length);

console.log('e');
for (let i of ligazon3) {
    i.style.color = 'orange';
  }
