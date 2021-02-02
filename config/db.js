const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('connected to DB');
  } catch (error) {
    console.log('failed to connect to DB');
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
