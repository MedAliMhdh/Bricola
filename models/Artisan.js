const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artisanSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  profession: {
    type: String,
    required: true,
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
  rate: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      value: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = Artisan = mongoose.model("artisan", artisanSchema);
