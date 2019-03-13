const fs = require("fs");

if (process.argv[2]) {
  const fileBuffer = fs.readFileSync(process.argv[2]);
  const splitByNewline = fileBuffer.toString().split("\n");
  console.log(splitByNewline.length - 1);
}
