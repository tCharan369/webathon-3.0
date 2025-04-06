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
  },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["student", "faculty", "public"],
    default: "public",
  },
  profileImageUrl: {
    type: String,
    default: "",
  },
  isActive: { type: Boolean, default: true },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
