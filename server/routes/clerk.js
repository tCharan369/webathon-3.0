const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/User");

const clerkRouter = express.Router();

// Webhook to handle new user creation
clerkRouter.post(
  "/webhook",
  expressAsyncHandler(async (req, res) => {
    const { id, email_addresses, first_name, last_name, profile_image_url } =
      req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email_addresses[0].email });
    if (existingUser) {
      return res.status(200).send({ message: "User already exists" });
    }

    // Create a new user in the database
    const newUser = new User({
      userName: id, // Clerk user ID
      firstName: first_name,
      lastName: last_name,
      email: email_addresses[0].email,
      role: "student", // Default role, can be updated later
      profileImageUrl: profile_image_url,
    });

    await newUser.save();
    res.status(201).send({ message: "User created successfully" });
  })
);

module.exports = clerkRouter;