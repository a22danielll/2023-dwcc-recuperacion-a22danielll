console.log('a');

let taboa = document.querySelector('#age-table');
console.log(taboa);
console.log('b');

let labels = document.getElementById('age-table').querySelectorAll('label');
labels.forEach((x) => console.log(x));

console.log('c');

let td = document.getElementById('age-table').querySelector('td');
console.log(td);
console.log('d');

let search = document.querySelector('form[name="search"]');
console.log(search);

console.log('e');
let input = search.querySelector('input');
console.log(input);
console.log('f');
let input2 = document.getElementsByName('search')[0].querySelectorAll('input');

console.log(input2[1]);
