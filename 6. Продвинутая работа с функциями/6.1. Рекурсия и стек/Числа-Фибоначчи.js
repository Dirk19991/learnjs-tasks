const memo = {
  1: 1,
  2: 1,
};

function fib(n) {
  if (n in memo) {
    return memo[n];
  } else {
    result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
  }
}

console.log(fib(77));

// решение с помощью мемоизации, также можно было бы передавать объект мемо в вызов функции, но по условию функция должна принимать один аргумент
