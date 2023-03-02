function f() {
  alert(this.name);
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' });

f();

// Вася, второй раз привязка не сработает, bind можно использовать только один раз
