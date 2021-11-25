const mongoose = require("mongoose");

const followerSchema = mongoose.Schema(
  {
    follower: {
      type: String,
      required: true,
    },
    followed: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("followers", followerSchema);
