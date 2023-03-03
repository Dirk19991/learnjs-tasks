Function.prototype.defer = function (ms) {
  let savedFunction = this;
  return function x(...args) {
    setTimeout(() => {
      savedFunction.call(this, ...args);
    }, ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
