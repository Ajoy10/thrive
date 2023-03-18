const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    content: {
      type: String,
      default: "",
    },
    thread: {
      type: Schema.Types.ObjectId,
      ref: "Thread",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", Comment);
