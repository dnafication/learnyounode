/** HTTP UPPERCASERER (Exercise 12 of 13)
 *
 * Write an HTTP server that receives only POST requests and converts
 * incoming POST body characters to upper-case and returns it to the client.
 * Your server should listen on the port provided by the first argument to
 * your program.
 */

const http = require("http");

const server = http.createServer(function(req, res) {
  if (req.method.toUpperCase() == "POST") {
    req.on("data", data => {
      console.log(data.toString());
      res.write(data.toString().toUpperCase());
    });
    req.on("end", () => res.end());
  }
});

server.listen(process.argv[2]);

/*
Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/
