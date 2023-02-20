let arr = [1, 2, 3];

function shuffle(array) {
  return array.sort((a, b) => Math.random() - 0.5);
}

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

// знаю про более продвинутый алгоритм Фишера-Йейтса, но поскольку написать его самостоятельно из головы не могу, не стал копировать это решение из Интернета. Решение выше имеет некое смещение вероятностей из-за особенностей работы sort().
