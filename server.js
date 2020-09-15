const express = require("express");
const sassMiddleware = require("node-sass-middleware");

const app = express();

app.use(sassMiddleware({
  src: __dirname + '/styles',
  dest: __dirname + '/public',
  debug: true,
}));


app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const port = 3000;
// const port = process.env.PORT

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
