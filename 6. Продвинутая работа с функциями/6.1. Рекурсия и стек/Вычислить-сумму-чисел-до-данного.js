function sum1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sum2(n) {
  if (n === 1) {
    return 1;
  } else {
    return (n += sum2(n - 1));
  }
}

function sum3(n) {
  return (n * (n + 1)) / 2;
}

console.log(sum1(100));
console.log(sum2(100));
console.log(sum3(100));
