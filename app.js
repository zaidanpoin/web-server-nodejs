const fs = require("fs");
const http = require("http");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("file not found");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

http
  .createServer((req, res) => {
    const url = req.url;

    switch (url) {
      case "/about":
        renderHTML("./about.html", res);
        break;
      case "/kontak":
        renderHTML("./kontak.html", res);
        break;
      default:
        renderHTML("./index.html", res);
    }
  })
  .listen(3000, () => {
    console.log("server is listening on port 3000");
  });
