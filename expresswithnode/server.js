const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const nodemailer = require("nodemailer");
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
  const { email, password, firstname, lastname, address } = req.body;
  console.log("register api called", email, password);
  res.send({
    message: "register api called",
    status: 1,
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    address: address,
  });
});

//login-api
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send({
    message: "Login successfully",
    email: email,
    password: password,
    status: 1,
  });
});

//email-sent api to the user
app.post("/api/email-sent", async function (req, res) {
  const user = "ketan12pawar@gmail.com";
  const transport = nodemailer.createTransport({
    //smtp
    host: "smtp.gmail.com",
    port: "465",
    auth: {
      user: "amit9479479737@gmail.com",
      pass: "oqwssmxtngaibzip",
    },
  });
  const info = await transport.sendMail({
    from: "amit9479479737@gmail.com",
    to: user,
    subject: "Welcome Email",
    html: `<b>hello user welcome in my website.com 2023 ,thank you</b>`,
  });
  if (info) {
    res.send({ message: "welcome email sent successfully", status: 1 });
  } else {
    res.send({ message: "welcome email sent failed", status: 0 });
  }
});

app.listen(port, function (err) {
  if (err) {
    console.log("getting error to server up");
  } else {
    console.log(`server runnig on http://localhost:${port}`);
  }
});
