class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

let err = new FormatError('ошибка форматирования');

console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);
console.log(err.message);
console.log(err.name);
console.log(err.stack);
