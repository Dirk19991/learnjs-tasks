let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

let users = [vasya, petya, masha];

function namesToFullnames(arr) {
  return arr.map((person) => ({
    fullName: `${person.name} ${person.surname}`,
    id: person.id,
  }));
}

console.log(namesToFullnames(users));
