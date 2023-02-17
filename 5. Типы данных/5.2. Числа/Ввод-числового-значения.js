function readNumber() {
  let number = prompt('Введите число', '');

  while (!isFinite(number)) {
    number = prompt('Введите число', '');
  }

  if (num === null || num === '') return null;

  return +num;
}
