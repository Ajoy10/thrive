const express = require("express");
const router = express.Router();

const GetTopic = require("./controllers/GetTopic");
const CreateTopic = require("./controllers/CreateTopic");

// GET /topics/all
router.get("/all", (req, res) => {
  GetTopic.All()
    .then((result) => res.send(result))
    .catch((err) => {
      res.statusCode = 501;
      res.send(err);
    });
});

router.get("/search", (req, res) => {
  if (req.query.term) {
    const { term } = req.query;
    GetTopic.BySearch(term)
      .then((result) => res.send(result))
      .catch((err) => {
        res.statusCode = 400;
        res.send(err);
      });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  GetTopic.ByID(id)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/count/:id", (req, res) => {
  const threadid = req.params.id;
  GetTopic.CountByTopic(threadid).then((r) => res.send({ count: r }));
});

// POST /posts
router.post("/", (req, res) => {
  // Verify user can post i.e. logged in
  const { name, description } = req.body;
  CreateTopic(name, description)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.statusCode = 501;
      res.send(err);
    });
});

module.exports = { topicRouter: router };
