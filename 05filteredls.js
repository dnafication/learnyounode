const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const ext = process.argv[3];

if (dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    // console.log(files);

    files.forEach(file => {
      if (ext) {
        if (path.extname(file).slice(1) === ext) {
          console.log(file);
        }
      } else {
        console.log(file);
      }
    });
  });
}
