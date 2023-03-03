let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

// быстрее получить через head.glasses, потому что свойство возьмется напрямую, не будет лишних проверок на наличие свойства в pockets, bed, table. В решении задачи говорится что это неважно, потому что "при обращении к pockets.glasses движок запомнит, что нашли glasses в head, и в следующий раз будут искать там же.", но в первый раз придется все равно пройти всю цепочку
