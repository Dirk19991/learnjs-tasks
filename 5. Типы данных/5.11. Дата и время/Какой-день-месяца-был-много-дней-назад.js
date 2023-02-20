function getDateAgo(date, days) {
  let date2 = new Date(date);

  date2.setDate(date.getDate() - days);

  return date2.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
