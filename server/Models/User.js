const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["student", "faculty", "public"],
    required: true,
  },
  profileImageUrl: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, default: true },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
