const express = require('express');
const app = express();
const config = require('config');
const connectDB = require('./config/db');

PORT = config.get('PORT');
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/user', require('./routes/api/user'));

app.get('/', (req, res) => {
  res.send('Welcome to home page');
});

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
