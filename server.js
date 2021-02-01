const express = require("express");
const app = express();
const config = require("config");

PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
