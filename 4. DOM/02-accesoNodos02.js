'use strict';
console.log('a');
let input2 = document.querySelectorAll('#input2');
console.log(input2);

console.log('b');
let paragrafos = document.getElementsByTagName('p');

console.log(paragrafos);

console.log('c');
let paragrafos2 = document.getElementById('lipsum').querySelectorAll('p');
paragrafos2.forEach((x) => console.log(x));

console.log('d');
let form = document.querySelector('form');
console.log(form);

console.log('e');
let inputs = document.querySelectorAll('input');
inputs.forEach((x) => console.log(x));
console.log('f');
let sexo = document.querySelectorAll('input[name="sexo"]');
sexo.forEach((x) => console.log(x));

console.log('g');
let items = document.querySelectorAll('.important');
items.forEach((x) => console.log(x));
//console.log(items);
