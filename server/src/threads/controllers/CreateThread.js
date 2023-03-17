const Thread = require("../models/Thread");

module.exports = (title, content, topicId) => {
  const newThread = new Thread({ title, content, topic: topicId });
  return newThread.save();
};
