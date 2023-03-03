let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // true, свойство есть в rabbit

delete rabbit.jumps;

alert(rabbit.jumps); // null, свойство есть в animal

delete animal.jumps;

alert(rabbit.jumps); // undefined, свойства больше нет
