const Mongoose = require("mongoose");
const user = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    await user
      .create({
        ...req.body,
      })
      .then((createdNewUser) => {
        res.status(200).json({ message: "Success", data: createdNewUser });
      })
      .catch((error) => {
        res.status(400).json({ message: "Bad Request", error });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request", error });
  }
};

exports.findUser = async (req, res) => {
  const { email } = req.params;
  try {
    const currentUser = await user.findOne({ email });
    if (currentUser)
      res.status(200).send({ message: "Success", data: currentUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request", error });
  }
};
