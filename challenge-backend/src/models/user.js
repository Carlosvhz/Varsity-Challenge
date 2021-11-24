const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    following: {
      type: [Object],
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
