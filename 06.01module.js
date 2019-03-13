const fs = require("fs");
const path = require("path");

module.exports = function(dirname, ext, cb) {
  let result = [];
  fs.readdir(dirname, (err, files) => {
    if (err) return cb(err);
    // console.log(files);
    files.forEach(file => {
      if (ext) {
        if (path.extname(file) === "." + ext) {
          result.push(file);
        }
      } else {
        result.push(file);
      }
    });
    return cb(null, result);
  });
};
