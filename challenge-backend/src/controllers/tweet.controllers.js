const Mongoose = require("mongoose");
const tweet = require("../models/tweet");

exports.createTweet = async (req, res) => {
  try {
    await tweet
      .create({ ...req.body })
      .then((createdNewTweet) => {
        res.status(200).json({ message: "Success", data: createdNewTweet });
      })
      .catch((error) => {
        res.status(400).json({ message: "Bad Request", error });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request", error });
  }
};
