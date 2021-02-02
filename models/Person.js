const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
});

module.exports = Person = mongoose.model("person", personSchema);
