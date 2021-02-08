const express = require("express");
const app = express();
const config = require("config");
const connectDB = require("./config/db");

PORT = config.get("PORT") || 5000;

connectDB();

//Init middleware
app.use(express.json({ extended: false }));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");

  // Request headers you wish to allow
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//Routes middleware
app.use("/api/user", require("./routes/api/user"));
app.use("/api/person", require("./routes/api/person"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/post"));
app.use("/api/artisan", require("./routes/api/artisan"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
