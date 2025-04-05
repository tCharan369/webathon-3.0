

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  tags: [String],
  status: {
    type: String,
    enum: ["available", "taken"],
    default: "available",
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  takenBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});
const Books = new mongoose.model("Book", bookSchema);
module.exports = Books;
