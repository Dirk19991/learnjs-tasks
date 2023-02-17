function sumInput() {
  let numbers = [];

  while (true) {
    let val = prompt('Введите число', '');

    if (val === '' || val === null || !isFinite(val)) break;

    numbers.push(+val);
  }

  return numbers.reduce((acc, elem) => (acc += elem), 0);
}
