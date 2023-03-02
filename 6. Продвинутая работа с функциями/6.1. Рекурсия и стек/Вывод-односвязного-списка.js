let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList1(list) {
  let temp = list;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

function printList2(list) {
  console.log(list.value);

  if (list.next) {
    printList1(list.next);
  }
}

printList1(list);
printList2(list);

// мне вариант с обходом цикла кажется более понятным
