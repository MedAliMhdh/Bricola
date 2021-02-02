const express = require("express");
const app = express();
const config = require("config");
const connectDB = require("./config/db");

PORT = config.get("PORT");
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
