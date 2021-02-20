const express = require('express');
const app = express();
const config = require('config');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

PORT = process.env.PORT || 5000;

connectDB();

//Init middleware
app.use(cors());
app.use(express.json());

//Routes middleware
app.use('/api/user', require('./routes/api/user'));
app.use('/api/person', require('./routes/api/person'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/post'));
app.use('/api/artisan', require('./routes/api/artisan'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'clien', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
