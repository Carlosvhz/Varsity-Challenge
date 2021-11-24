require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT;
const uri = process.env.URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log("Connected bro :3")))
  .catch((e) =>
    console.log(
      "Hey something goes wrong, u should check the connection again :c ... ",
      e
    )
  );

const app = express();
