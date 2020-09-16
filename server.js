const express = require("express");

const app = express();

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
