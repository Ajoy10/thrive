const express = require("express");
const CreateThread = require("./controllers/CreateThread");
const GetThread = require("./controllers/GetThread");
const router = express.Router();

// GET /posts
router.get("/all", (req, res) => {
  GetThread.All()
    .then((result) => res.send(result))
    .catch((err) => {
      res.statusCode = 501;
      res.send(err);
    });
});

// POST /posts
router.post("/", (req, res) => {
  // Verify user can post i.e. logged in
  const { title, content } = req.body;
  CreateThread(title, content)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.statusCode = 501;
      res.send(err);
    });
});

module.exports = { threadRouter: router };
