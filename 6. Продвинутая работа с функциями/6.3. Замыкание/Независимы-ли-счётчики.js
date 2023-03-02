function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

// счетчики независимы благодаря замыканию, у каждого своя переменная count
