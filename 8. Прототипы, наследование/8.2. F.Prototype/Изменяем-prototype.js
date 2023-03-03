function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

///////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit1 = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // true, мы перезаписали объект прототипа, но это повлияет только на следующие объекты, созданные с помощью Rabbit.

///////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit2 = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit.eats); // false, мы перезаписали свойство в прототипе

///////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit3 = new Rabbit();

delete rabbit.eats;

alert(rabbit.eats); // true, мы удалили свойство на объекте, но оно хранится в прототипе

///////////////////////////

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit4 = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats); // undefined, мы удалили свойство из прототипа
