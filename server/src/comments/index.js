const express = require("express");
const authMiddleware = require("../utils/authMiddleware");
const router = express.Router();

const GetComment = require("./controllers/GetComment");
const CreateComment = require("./controllers/CreateComment");

// GET /posts
router.get("/all", (req, res) => {
  GetComment.All()
    .then((result) => res.send(result))
    .catch((err) => {
      res.statusCode = 501;
      res.send(err);
    });
});

router.get("/", (req, res) => {
  if (req.query.thread) {
    GetComment.ByThreadID(req.query.thread)
      .then((result) => res.send(result))
      .catch((err) => {
        res.statusCode = 501;
        res.send(err);
      });
  }
});

router.get("/:id", (req, res) => {
  GetComment.ByID(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// POST /posts
router.post("/", authMiddleware, (req, res) => {
  // Verify user can post i.e. logged in
  const { content, threadId } = req.body;
  CreateComment(content, threadId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.statusCode = 501;
      res.send(err);
    });
});

module.exports = { commentRouter: router };
