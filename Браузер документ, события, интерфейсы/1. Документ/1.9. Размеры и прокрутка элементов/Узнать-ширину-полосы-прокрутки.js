let elem = document.createElement('div');

elem.style.overflowY = 'scroll';
elem.style.width = '100px';
elem.style.height = '100px';

document.body.append(elem);
let scrollWidth = elem.offsetWidth - elem.clientWidth;

elem.remove();

console.log(scrollWidth);
