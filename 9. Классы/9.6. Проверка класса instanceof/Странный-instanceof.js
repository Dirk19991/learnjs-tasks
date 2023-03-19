function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true

// instanceof работает, проверяя объект, на который ссылается a.__proto__, а это и A.Prototype, и B.prototype.
