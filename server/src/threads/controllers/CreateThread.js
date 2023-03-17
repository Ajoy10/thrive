const Thread = require("../models/Thread");

module.exports = (title, content) => {
  const newThread = new Thread({ title, content });
  return newThread.save();
};
