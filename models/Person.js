const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  adress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
  },
  profilephoto: {
    type: String,
  },
});

module.exports = Person = mongoose.model("person", personSchema);
