const Comment = require("../models/Comment");

const ByID = (id) => {
  return Comment.findById(id).populate("thread");
};

const All = () => {
  return Comment.find().populate("thread");
};

// const InTopic = (topic) => {
//   return Thread.find({ topic: topic });
// };

const ByThreadID = (id) => {
  return Comment.find({ thread: id });
};

module.exports = { ByID, ByThreadID, All };
