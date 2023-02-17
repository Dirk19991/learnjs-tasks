function filterRange(arr, a, b) {
  return arr.filter((elem) => elem >= a && elem <= b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4));
