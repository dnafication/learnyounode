// console.log(process.argv);

let total = 0;
process.argv.forEach((element, idx) => {
  if (idx > 1) {
    total += parseInt(element);
  }
});

console.log(total);
