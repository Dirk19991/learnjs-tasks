let arr = [5, 2, 1, -10, 8];

function sortHighToLow(array) {
  return array.sort((a, b) => b - a);
}

let sortedArr = sortHighToLow(arr);

console.log(sortedArr);
