const Topic = require("../models/Topic");

module.exports = (topic) => {
  const newTopic = new Topic({ name: topic });
  return newTopic.save();
};
