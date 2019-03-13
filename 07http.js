const http = require("http");

const url = process.argv[2];

if (url) {
  http.get(url, function(response) {
    response.setEncoding("utf-8");
    response.on("data", console.log);
    response.on("error", console.error);
  });
}
