function getLocalDay(date) {
  let day = date.getDay();
  return day === 0 ? 7 : day;
}

let date = new Date(2012, 0, 9);

console.log(getLocalDay(date));
