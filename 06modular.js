const ls = require("./06module");

const dir = process.argv[2];
const ext = process.argv[3];

ls(dir, ext, (err, data) => {
  if (err) throw err;
  data.forEach(element => {
    console.log(element);
  });
});
