const ex = require("express");
const userApp = ex.Router();
const expressAsyncHandler = require("express-async-handler");

const User = require("../Models/User");

//  Create user
userApp.post(
  "/createUser",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
    const userInDb = await User.findOne({ email: newUser.email });
    if (userInDb) {
      return res.send({ message: "UserAlready existed" });
    }
    const userObj = new User(newUser);
    const userDoc = await userObj.save();
    return res.send({ message: "user created", payload: userDoc });
  })
);

//  Get all users
userApp.get(
  "/getUsers",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    // console.log(users);
    res.send({ message: "All users", payload: users });
  })
);

//  Get single user by ID
userApp.get(
  "/getUser/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send({ message: "User not found" });
    res.send({ message: "User found", payload: user });
  })
);

// Update user details
userApp.put(
  "/updateUser/:id",
  expressAsyncHandler(async (req, res) => {
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).send({ message: "User not found" });
    res.send({ message: "User updated", payload: updatedUser });
  })
);

// Block user (set isActive to false)
userApp.patch(
  "/blockUser/:id",
  expressAsyncHandler(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User blocked successfully", payload: updatedUser });
  })
);

//  Reset Password
userApp.put(
  "/resetPassword/:id",
  expressAsyncHandler(async (req, res) => {
    const { newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).send({ message: "New password is required" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { password: newPassword },
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).send({ message: "User not found" });
    res.send({ message: "Password reset", payload: updatedUser });
  })
);

module.exports = userApp;
