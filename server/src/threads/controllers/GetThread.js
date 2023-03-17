const Thread = require("../models/Thread");

const ByID = (id) => {
  return Thread.findById(id).populate("topic");
};

const All = () => {
  return Thread.find().populate("topic");
};

// const InTopic = (topic) => {
//   return Thread.find({ topic: topic });
// };

module.exports = { ByID, All };
