const Thread = require("../models/Thread");

const ByID = (id) => {
  return Thread.findById(id);
};

const All = () => {
  return Thread.find();
};

// const InTopic = (topic) => {
//   return Thread.find({ topic: topic });
// };

module.exports = { ByID, All };
