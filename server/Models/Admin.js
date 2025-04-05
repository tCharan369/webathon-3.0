const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  // userName: {
  //   type: String,
  //   unique: true,
  // },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },

  profileImageUrl: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
