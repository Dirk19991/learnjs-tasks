function getSecondsToday() {
  let currentDate = new Date();
  return (
    currentDate.getHours() * 3600 +
    currentDate.getMinutes() * 60 +
    currentDate.getSeconds()
  );
}

console.log(getSecondsToday());
