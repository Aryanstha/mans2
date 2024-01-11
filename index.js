const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {

  console.log("Application started and Listening on port 3000");
});

// server css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.get('/because', (req, res) => {
  res.sendFile(__dirname + "/src/because.html");
});
app.get('/services', (req, res) => {
  res.sendFile(__dirname + "/src/services.html");
});

app.get('/mission', (req, res) => {
  res.sendFile(__dirname + "/src/mission.html");
});