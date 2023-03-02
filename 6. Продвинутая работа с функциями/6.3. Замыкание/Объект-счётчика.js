function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

// счетчик будет работать, покажет 1, 2, 1. Более того, мы можем так создать несколько счетчиков, и в каждом будет своя переменная count благодаря замыканию
