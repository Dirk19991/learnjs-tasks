function sum(a) {
  return function sum2(b) {
    return a + b;
  };
}

console.log(sum(2)(3));
