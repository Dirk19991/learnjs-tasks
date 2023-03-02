function f(x) {
  alert(x);
}

function delay(fn, delay) {
  return function (...args) {
    let saved = this;
    setTimeout(function () {
      fn.apply(saved, args);
    }, delay);
  };
}
