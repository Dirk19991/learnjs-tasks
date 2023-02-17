function checkSpam(str) {
  let lowercaseStr = str.toLowerCase();

  return lowercaseStr.includes('viagra') || lowercaseStr.includes('xxx');
}

console.log(checkSpam('innocent rabbit'));
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
