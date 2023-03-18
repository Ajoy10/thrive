const Comment = require("../models/Comment");

module.exports = (content, threadId) => {
  const newComment = new Comment({ content, thread: threadId });
  return newComment.save();
};
