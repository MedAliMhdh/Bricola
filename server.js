const express = require("express");
const app = express();
const config = require("config");
const connectDB = require("./config/db");

PORT = config.get("PORT") || 5000;

connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Routes middleware
app.use("/api/user", require("./routes/api/user"));
app.use("/api/person", require("./routes/api/person"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
