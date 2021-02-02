const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artisanSchema = new Schema({
  user: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "user",
  },
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
  bio: {
    type: String,
  },
});

module.exports = Artisan = mongoose.model("artisan", artisanSchema);
