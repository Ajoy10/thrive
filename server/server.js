const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

require("./src/utils/connectDB");

const { threadRouter } = require("./src/threads");
const { topicRouter } = require("./src/topics");
const { commentRouter } = require("./src/comments");

app.use(express.json());

// Setting up CORS

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

const corsOption = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credential: true,
};

app.use(cors(corsOption));

// Routes

app.use("/threads", threadRouter);
app.use("/topics", topicRouter);
app.use("/comments", commentRouter);

//#region Server listening Setup

// Setting up server
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Server running successfully!");
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server running at http://localhost:" + port);
  }
});
// #endregion
