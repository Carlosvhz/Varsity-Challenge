const express = require("express");
const router = express.Router();

const tweetController = require("../controllers/tweet.controllers");

router.route("/createTweet").post(tweetController.createTweet);
router.route("/findTweet/:id").get(tweetController.getTweet);
router
  .route("/findCurrentUserTweets/:id")
  .get(tweetController.findCurrentUserTweets);
router.route("/findAllUserTweets/:id").get(tweetController.findAllUserTweets);

module.exports = router;
