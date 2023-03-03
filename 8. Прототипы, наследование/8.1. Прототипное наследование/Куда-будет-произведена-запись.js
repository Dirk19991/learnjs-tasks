let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// rabbit, поскольку метод вызван именно на объекте rabbit
