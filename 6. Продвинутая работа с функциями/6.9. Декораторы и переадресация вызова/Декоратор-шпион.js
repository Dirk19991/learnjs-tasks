function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(fn) {
  function inner(...args) {
    inner.calls.push(args);
    return fn.apply(this, args);
  }

  inner.calls = [];

  return inner;
}

work = spy(work);

work(1, 2);
work(4, 5);
