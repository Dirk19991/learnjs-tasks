let obj2 = new obj.constructor();

// сработает в большинстве случаем когда прототип не переписывался, например:

function Animal(name) {
  this.name = name;
}

let obj3 = new Animal('rabbit');

// не сработает если перезаписать прототип

function Animal(name) {
  this.name = name;
}

Animal.prototype = {};

let obj4 = new Animal('rabbit');
