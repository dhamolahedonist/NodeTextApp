const express = require("express");
const Nexmo = require("nexmo");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const socketio = require("socket.io");

// init nexmo
const nexmo = new Nexmo(
  {
    apiKey: "03ea07a5",
    apiSecret: "XQspT8tGGqk3PKtD",
  },
  { debug: true }
);

const app = express();

app.set("view engine", "html");
app.engine("html", ejs.renderFile);

// public foler setup
app.use(express.static(__dirname + "/public"));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// index route
app.get("/", (req, res) => {
  res.render("index");
});

// catch from submit
app.post("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

const PORT = 3000;

const server = app.listen(PORT, () => console.log(`listening to port ${PORT}`));
