let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true

// сделать можно, но довольно бессмысленно, обе функции возвращают один и тот же внешний объект.
