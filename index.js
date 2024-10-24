const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;

    switch (filename) {
      case "./":
        fs.readFile("./index.html", (err, data) => {
          if (!err) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }
        });
        break;

      case "./about":
      case "./about.html":
        fs.readFile("./about.html", (err, data) => {
          if (!err) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }
        });
        break;

      case "./contact-me":
      case "./contact-me.html":
        fs.readFile("./contact-me.html", (err, data) => {
          if (!err) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }
        });
        break;

      default:
        fs.readFile("./404.html", (err, data) => {
          if (!err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }
        });
        break;
    }
  })
  .listen(8080);
