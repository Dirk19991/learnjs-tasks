let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = Object.values(salaries)
  ? Object.values(salaries).reduce((acc, elem) => (acc += elem), 0)
  : 0;

console.log(sum);
