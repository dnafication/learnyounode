/**
 * ## HTTP COLLECT (Exercise 8 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
 */

const http = require("http");
const bl = require("bl");

if (process.argv[2]) {
  http.get(process.argv[2], function(response) {
    response.setEncoding("utf-8");
    response.pipe(
      bl(function(err, data) {
        if (err) console.error(err);
        console.log(data.toString().length);
        console.log(data.toString());
      })
    );
  });
} else console.log("no url provided");
