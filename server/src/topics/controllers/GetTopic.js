const Thread = require("../../threads/models/Thread");
const Topic = require("../models/Topic");

const ByID = (id) => {
  return Topic.findById(id);
};

const All = () => {
  return Topic.find();
};

module.exports = { ByID, All };
