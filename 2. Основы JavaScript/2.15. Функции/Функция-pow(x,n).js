function pow(x, n) {
  let res = x;

  for (let i = 1; i < n; i++) {
    res *= x;
  }

  return res;
}

let x = prompt('Введите основание', '');
let n = prompt('Введите степень', '');

if (n < 1 || n % 1 !== 0) {
  alert('Степень должна быть целым натуральным числом');
} else {
  alert(pow(x, n));
}
