function printNumbers1(from, to) {
  let a = from;
  let timer = setInterval(() => {
    if (a <= to) {
      console.log(a);
    } else {
      clearInterval(timer);
    }
    a++;
  }, 1000);
}

function printNumbers2(from, to) {
  let a = from;
  let timer = setTimeout(function log() {
    console.log(a);
    a++;
    if (a <= to) {
      setTimeout(log, 1000);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

printNumbers1(3, 7);
printNumbers2(3, 7);
