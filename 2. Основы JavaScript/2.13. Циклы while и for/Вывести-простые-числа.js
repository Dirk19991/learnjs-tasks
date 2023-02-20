function isPrimeNumber(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function getPrimesTo(num) {
  let primeNumbers = [];
  for (let i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) primeNumbers.push(i);
  }
  return primeNumbers;
}

console.log(getPrimesTo(100));

// разбил на две функции для удобства
