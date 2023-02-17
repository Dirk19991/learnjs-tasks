let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

function getNames(arr) {
  return arr.map((person) => person.name);
}

console.log(getNames(users));
