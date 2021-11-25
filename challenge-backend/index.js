require("dotenv/config");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const port = process.env.PORT;
const uri = process.env.URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () =>
      console.log("Database connected succesfully on port", port)
    )
  )
  .catch((e) =>
    console.log(
      "Hey something goes wrong, u should check the connection again ",
      e
    )
  );

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(cors());

app.use("/tweet", require("./src/routes/tweet.route.js"));
app.use("/user", require("./src/routes/user.route.js"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../challenge-frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "..", "challenge-frontend", "build", "index.html")
    );
  });
}
