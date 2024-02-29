const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Welcome to all of you at /");
});
app.get("/home", (req, res) => {
    res.send("Welcome to all of you at /home");
  });
app.listen(port, function (err) {
  if (err) {
    console.log("getting error to server up");
  } else {
    console.log(`server runnig on http://localhost:${port}`);
  }
});
