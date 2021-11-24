const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  creator_name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
  },
});

module.exports = mongoose.model("tweets", userSchema);
