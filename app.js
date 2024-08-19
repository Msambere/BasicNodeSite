const express = require("express");
const app = express();

const _dirname = "/home/msambere/repos/BasicNodeSite";

// app.get("/", function (req, res) {
//   console.log(req.path);
//   res.sendFile(_dirname + "/index.html");
// });

// app.get("/index.html", function (req, res) {
//   console.log(req.path);
//   res.sendFile(_dirname + "/index.html");
// });

// app.get("/about.html", function (req, res) {
//   console.log(req.path);
//   res.sendFile(_dirname + req.path);
// });

// app.get("/contact-me.html", function (req, res) {
//   console.log(req.path);
//   res.sendFile(_dirname + req.path);
// });

app.get("*", function (req, res) {
  console.log(req.path);
  if (req.path == "/" || req.path == "/index.html") {
    res.sendFile(_dirname + "/index.html");
  } else if (req.path == "/about.html" || req.path == "/contact-me.html") {
    res.sendFile(_dirname + req.path);
  } else {
    res.sendFile(_dirname + "/404.html");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express running - listening on port ${PORT}!`);
});
