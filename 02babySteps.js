// console.log(process.argv);

/**
 * ## BABY STEPS (Exercise 2 of 13)

  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).
 */

let total = 0;
process.argv.forEach((element, idx) => {
  if (idx > 1) {
    total += parseInt(element);
  }
});

console.log(total);
