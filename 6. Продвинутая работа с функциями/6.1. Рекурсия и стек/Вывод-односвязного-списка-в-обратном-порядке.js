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
  let arr = [];

  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function printList2(list) {
  if (list.next) {
    printList2(list.next);
  }

  console.log(list.value);
}

printList1(list);
printList2(list);

// опять-таки, мне больше нравится цикл
