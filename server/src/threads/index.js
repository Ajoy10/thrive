const express = require("express");
const authMiddleware = require("../utils/authMiddleware");
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

router.get("/", (req, res) => {
  if (req.query.topic) {
    GetThread.ByTopicID(req.query.topic)
      .then((result) => res.send(result))
      .catch((err) => {
        res.statusCode = 501;
        res.send(err);
      });
  }
});

router.get("/:id", (req, res) => {
  GetThread.ByID(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// POST /posts
router.post("/", authMiddleware, (req, res) => {
  // Verify user can post i.e. logged in
  const { title, content, topicId } = req.body;
  CreateThread(title, content, topicId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.statusCode = 501;
      res.send(err);
    });
});

module.exports = { threadRouter: router };
