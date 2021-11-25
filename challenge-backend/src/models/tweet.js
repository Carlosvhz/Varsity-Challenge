const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    creatorName: {
      type: String,
      require: true,
    },
    creatorPicture: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tweets", tweetSchema);
