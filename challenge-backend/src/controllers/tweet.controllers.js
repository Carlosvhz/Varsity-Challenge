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

/*Get a specific tweet*/
exports.getTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const idObject = Mongoose.Types.ObjectId(id);
    tweet
      .findOne({ _id: idObject, isActive: true })
      .then((result) => {
        res.status(200).json({ tweet: result });
      })
      .catch((error) => {
        res.status(400).json({ message: "Bad Request", error });
      });
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};
