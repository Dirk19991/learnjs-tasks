function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    let num = +prompt('Введите число', '');
    this.value += num;
  };
}

let accumulator = new Accumulator(2);
