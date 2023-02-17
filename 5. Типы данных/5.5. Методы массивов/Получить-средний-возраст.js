let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(array) {
  return array.reduce((acc, elem) => (acc += elem.age), 0) / array.length;
}

console.log(getAverageAge(arr));
