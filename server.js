const express = require("express");
const app = express();
const config = require("config");
const connectDB = require("./config/db");

PORT = config.get("PORT") || 5000;

// const personRoute = ;
connectDB();

//Body parser middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

//Routes middlewware
app.use("/api/person", require("./routes/api/person"));

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
