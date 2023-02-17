it('Возводит x в степень n', function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// если в тесте что-то пойдет не так, мы не поймем, в каком именно случае - это усложнит отладку. Нужно разбить тест на три блока, чтобы получать результаты по каждому случаю.
