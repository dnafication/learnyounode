/**
 * ##Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
 */
const net = require("net");

function now() {
  const date = new Date();

  const yyyy = date.getFullYear();
  const mm = ("0" + (date.getMonth() + 1)).slice(-2);
  const dd = ("0" + date.getDate()).slice(-2);
  const HH = ("0" + date.getHours()).slice(-2);
  const MM = ("0" + date.getMinutes()).slice(-2);

  return `${yyyy}-${mm}-${dd} ${HH}:${MM}`;
}

const tcpServer = net.createServer(function(socket) {
  // console.log(`${yyyy}-${mm}-${dd} ${HH}:${MM}`);

  socket.write(now() + "\n");
  socket.end();
});

tcpServer.listen(process.argv[2]);
