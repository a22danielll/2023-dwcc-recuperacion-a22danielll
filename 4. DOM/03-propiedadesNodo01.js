'use strict';
console.log('a');

let sexo = document.querySelectorAll('label')[3];
console.log(sexo.innerHTML);
console.log(sexo.innerText);
console.log(sexo.textContent);

console.log('b');
let input = document.querySelectorAll('label')[3].querySelector('input');
console.log(input.value);

console.log('c');
let input2 = document
  .querySelectorAll('label')[3]
  .querySelector("input[name='sexo']:checked");
console.log(input2.value);

console.log('d');
let lis = document.querySelectorAll('li');
lis.forEach((x) => console.log(x.textContent));

console.log('e');
console.log(lis.length);

console.log('f');
let atributo = document.querySelectorAll('div');

atributo.forEach((x) => console.log(x.getAttribute('data-widget-name')));
