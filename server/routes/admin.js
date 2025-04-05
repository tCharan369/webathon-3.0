const express = require("express");
const adminApp = express.Router();
const expressAsyncHandler = require("express-async-handler");

const Admin = require("../Models/Admin");
const User = require("../Models/User"); // Assuming your user model is here

//  Get All Users
adminApp.get(
  "/allUsers",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find();
    res.send({ message: "All users fetched", payload: users });
  })
);
//  Create Admin 
adminApp.post(
  "/createAdmin",
  expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, email, profileImageUrl } = req.body;

    const adminInDb = await Admin.findOne({ email });
    if (adminInDb) {
      return res.status(400).send({ message: "Admin already exists" });
    }

    const newAdmin = new Admin({
      firstName,
      lastName,
      email,
      profileImageUrl,
    });

    const savedAdmin = await newAdmin.save();
    res.status(201).send({ message: "Admin created successfully", payload: savedAdmin });
  })
);

//  Enable/Disable User (toggle isActive)
adminApp.patch(
  "/toggleUserStatus/:userId",
  expressAsyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.isActive = !user.isActive;
    await user.save();

    res.send({ message: `User ${user.isActive ? "enabled" : "disabled"}`, payload: user });
  })
);



module.exports = adminApp;
