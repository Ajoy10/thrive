const Thread = require("../../threads/models/Thread");
const Topic = require("../models/Topic");

const ByID = (id) => {
  return Topic.findById(id);
};

const BySearch = (term) => {
  return Topic.find({ name: { $regex: term, $options: "i" } });
};

const All = () => {
  return Topic.find();
};

const CountByTopic = (topic) => {
  return Thread.find({ topic: topic }).countDocuments();
};

module.exports = { ByID, BySearch, CountByTopic, All };
