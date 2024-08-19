const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");

// const hostname = "127.0.0.1";
// const port = 3000;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const address = "." + q.pathname;
  let file;
  if (address == "./") {
    file = "./index.html";
  } else if (
    address == "./about.html" ||
    address == "./contact-me.html" ||
    address == "./index.html"
  ) {
    file = address;
  } else {
    file = "./404.html";
  }
  console.log("2nd time", file);
  fs.readFile(file, function (err, data) {
    if (err) {
      console.log("Uncaught Error");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(8080, () => {
  console.log(`Server running`);
});
