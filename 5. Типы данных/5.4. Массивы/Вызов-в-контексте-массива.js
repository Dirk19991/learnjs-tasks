let arr = ['a', 'b'];

arr.push(function () {
  alert(this);
});

arr[2](); // ?

// arr - это массив, а значит объект, функция при этом становится методом объекта, поэтому this будет ссылаться на этот объект, то есть массив arr.
