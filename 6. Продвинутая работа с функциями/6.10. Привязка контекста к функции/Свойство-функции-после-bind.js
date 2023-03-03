function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Вася',
});

console.log(bound.test);

// undefined, т.к. bind создает новую функцию, в которую записывается содержимое предыдущей функции, но не свойства объекта которые были определены позже
