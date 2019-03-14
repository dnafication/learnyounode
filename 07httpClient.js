/**
 * ## HTTP CLIENT (Exercise 7 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).  
 */

const http = require("http");

const url = process.argv[2];

if (url) {
  http.get(url, function(response) {
    response.setEncoding("utf-8");
    response.on("data", console.log);
    response.on("error", console.error);
  });
}
