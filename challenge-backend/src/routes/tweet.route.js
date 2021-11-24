const express = require("express");
const router = express.Router();

const tweetController = require("../controllers/tweet.controllers");

router.route("/createTweet").post(tweetController.createTweet);
router.route("/findTweet").get(tweetController.getTweet);

module.exports = router;
