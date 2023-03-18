const Topic = require("../models/Topic");

module.exports = (topic, description) => {
  const newTopic = new Topic({ name: topic, description });
  return newTopic.save();
};
