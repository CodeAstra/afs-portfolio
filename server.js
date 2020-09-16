const path = require('path');
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'), path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(connectLivereload());

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const port = 3000;
// const port = process.env.PORT

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
