function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

rabbit.sayHi(); // "Rabbit"
Rabbit.prototype.sayHi(); // undefined, в Rabbit.prototype нет свойства name
Object.getPrototypeOf(rabbit).sayHi(); // undefined, в Rabbit.prototype нет свойства name
rabbit.__proto__.sayHi(); // undefined, в Rabbit.prototype нет свойства name
