const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.route("/createUser").post(userController.createUser);
router.route("/findUser/:email").get(userController.findUser);

module.exports = router;
