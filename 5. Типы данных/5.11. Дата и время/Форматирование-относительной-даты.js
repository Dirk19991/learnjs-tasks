function formatDate(date) {
  let now = new Date();
  let diff = (now - date) / 1000;

  if (diff <= 1) {
    return 'прямо сейчас';
  } else if (diff <= 30) {
    return `${diff} сек. назад`;
  } else if (diff <= 3600) {
    return `${diff / 60} мин. назад`;
  }

  let format = (n) => (n < 10 ? '0' + n : n);

  let year = format(date.getFullYear() % 100);
  let month = format(date.getMonth() + 1);
  let day = format(date.getDate());
  let hours = format(date.getHours());
  let minutes = format(date.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(formatDate(new Date(new Date() - 1)));

console.log(formatDate(new Date(new Date() - 30 * 1000)));

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
