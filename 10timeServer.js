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
