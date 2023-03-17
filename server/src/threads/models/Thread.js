const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Thread = new Schema(
  {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Thread", Thread);
