function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

// Будет ошибка т.к. user.ref равно undefined. ref в этом случае свойство, а не метод объекта и во время вызова функции является this является undefined. Если бы ref был методом, который возвращает this, возвращался бы объект user.
