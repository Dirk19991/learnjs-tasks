function aclean(arr) {
  let object = {};

  for (let i = 0; i < arr.length; i++) {
    let sortedWord = arr[i].toLowerCase().split('').sort().join('');
    object[sortedWord] = arr[i];
  }

  return Object.values(object);
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));
