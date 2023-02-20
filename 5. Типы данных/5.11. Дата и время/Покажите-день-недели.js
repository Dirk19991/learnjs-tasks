function getWeekDay(date) {
  let daysObj = {
    0: 'ВС',
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
  };
  let day = date.getDay();
  return daysObj[day];
}

console.log(getWeekDay(new Date(2012, 0, 3)));
