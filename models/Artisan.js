const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artisanSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
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
  equipment: {
    type: Boolean,
    default: true,
  },
});

module.exports = Artisan = mongoose.model("artisan", artisanSchema);
