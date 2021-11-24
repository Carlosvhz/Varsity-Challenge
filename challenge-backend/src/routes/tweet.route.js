const express = require("express");
const router = express.Router();

const tweetController = require("../controllers/tweet.controllers");

router.route("/createTweet").post(tweetController.createTweet);

module.exports = router;
