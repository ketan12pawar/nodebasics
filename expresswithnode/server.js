const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 8080;
app.get("/", (req, res) => {
  res.send("Welcome to all of you at /");
});
app.get("/home", (req, res) => {
  res.send("Welcome to all of you at /home");
});

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "MSD",
  },
  {
    id: 3,
    name: "Akshay",
  },
  {
    id: 4,
    name: "Rohit",
  },
  {
    id: 5,
    name: "Sachin",
  },
];

app.get("/get-users", (req, res) => {
  res.send({ message: "users fetched succesffully", status: 1, users: users });
});

//register-api
app.post("/register", (req, res) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;
  console.log("register api called", email, password);
  res.send({ message: "register api called", status: 1 });
});

app.listen(port, function (err) {
  if (err) {
    console.log("getting error to server up");
  } else {
    console.log(`server runnig on http://localhost:${port}`);
  }
});
