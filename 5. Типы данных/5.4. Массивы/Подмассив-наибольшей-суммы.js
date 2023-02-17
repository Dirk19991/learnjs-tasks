function getMaxSubSum(arr) {
  let currentSum = 0;
  let currentMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    currentMax = Math.max(currentSum, currentMax);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return currentMax;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
