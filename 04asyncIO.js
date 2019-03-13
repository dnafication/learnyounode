const fs = require("fs");

if (process.argv[2]) {
  fs.readFile(process.argv[2], function(err, data) {
    if (err) throw err;
    const noOfLines = data.toString().split("\n").length - 1;
    console.log(noOfLines);
  });
}
