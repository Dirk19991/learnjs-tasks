let fruits = ['Яблоки', 'Груша', 'Апельсин'];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push('Банан');

// что в fruits?
alert(fruits.length); // ?

// массив это объект, поэтому длина fruits тоже изменится. Ответ - 4.
