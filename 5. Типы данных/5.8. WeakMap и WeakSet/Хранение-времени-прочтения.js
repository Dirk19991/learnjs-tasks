let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

// здесь можно использовать WeakMap и его метод set(). Опять-таки, WeakMap требуется только потому, что есть условие удаления даты при удалении объекта.
