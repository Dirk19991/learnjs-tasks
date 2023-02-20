let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

// поскольку в задаче есть условие "Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.", можно использовать WeakSet и его методы add (чтоб добавлять) и has (чтоб проверять, есть ли сообщение в WeakSet)
