// если мы выполним return из блока try, то без finally код не выполнится, мы увидим "1" в консоли только в первом случае. То же самое будет если пробросить ошибку из блока catch

try {
  return 1;
} catch {
  console.log(1);
} finally {
  console.log(1);
}

try {
  return 1;
} catch {
  console.log(1);
}

console.log(1);
