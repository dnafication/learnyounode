/**
 * ## MAKE IT MODULAR (Exercise 6 of 13)

  This problem is the same as the previous but introduces the concept of
  modules. You will need to create two files to solve this.

  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. The first argument is the
  directory name and the second argument is the extension filter. Print the
  list of files (one file per line) to the console. You must use
  asynchronous I/O.
 */

const ls = require("./06module");

const dir = process.argv[2];
const ext = process.argv[3];

ls(dir, ext, (err, data) => {
  if (err) throw err;
  data.forEach(element => {
    console.log(element);
  });
});
