function f() {
  alert(this);
}

let user = {
  g: f.bind(null),
};

user.g();

// null, т.к. мы явно привязываем контекст null к функции
