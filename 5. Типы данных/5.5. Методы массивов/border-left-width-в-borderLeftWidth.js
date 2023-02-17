function camelize(str) {
  return str
    .split('-')
    .map((elem, i) => (i === 0 ? elem : elem[0].toUpperCase() + elem.slice(1)))
    .join('');
}

console.log(camelize('-webkit-transition'));
