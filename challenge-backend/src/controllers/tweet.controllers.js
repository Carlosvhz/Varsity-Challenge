const mongoose = require("mongoose");
const tweet = require("../models/tweet");

exports.createTweet = async (req, res) => {
  try {
    const createdNewTweet = await tweet.create({ ...req.body });
    res.status(200).json({ message: "Success", data: createdNewTweet });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request", error });
  }
};

/*Get a specific tweet*/
exports.getTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const idObject = mongoose.Types.ObjectId(id);
    tweet.findOne({ _id: idObject, isActive: true }).then((result) => {
      res.status(200).json({ tweet: result });
    });
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

/*Get all current User Tweets*/
exports.findCurrentUserTweets = async (req, res) => {
  const { id } = req.params;
  try {
    const tweets = await tweet.find({ creatorId: mongoose.Types.ObjectId(id) });
    res.status(200).json({ message: "Success", data: tweets });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request", error });
  }
};
