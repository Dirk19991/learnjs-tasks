let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});
// поскольку никакие дескрипторы свойств не указаны, enumerable автоматически становится false

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

console.log(dictionary);
