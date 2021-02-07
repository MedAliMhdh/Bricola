const express = require("express");
const app = express();
const config = require("config");
const connectDB = require("./config/db");
const cors = require("cors");

PORT = config.get("PORT") || 5000;

connectDB();

//Init middleware
app.use(express.json({ extended: false }));
app.use(cors());

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
