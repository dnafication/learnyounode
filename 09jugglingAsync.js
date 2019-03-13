const http = require("http");
const bl = require("bl");

for (let index = 0; index < 3; index++) {
  http.get(process.argv[2 + index], function(res) {
    res.pipe(
      bl(function(err, data) {
        if (err) console.error(err);
        console.log(data.toString());
      })
    );
  });
}
