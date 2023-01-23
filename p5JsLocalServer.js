// NoahTheCorgi, basic express server for local p5.js projects
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("p5"));
app.get("/", function (req, res, next) {
  res.status(200);
  res.set("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/p5/index.html"));
});
// set up the server locally...
app.listen(8000);
console.log("Server for the Fridges App running at http://localhost:8000");
