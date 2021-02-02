const express = require('express');
const app = express();
const config = require('config');
const connectDB = require('./config/db');

<<<<<<< HEAD
PORT = config.get("PORT") || 5000;

connectDB();

//Body parser middleware
app.use(express.json);
=======
PORT = config.get('PORT');
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Routes middleware
app.use('/api/user', require('./routes/api/user'));
app.use("/api/person", require("./routes/api/person"));
>>>>>>> master

app.get('/', (req, res) => {
  res.send('API is running');
});


app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
