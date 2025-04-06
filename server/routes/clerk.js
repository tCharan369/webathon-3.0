const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/User");

const clerkRouter = express.Router();

// Webhook to handle new user creation
clerkRouter.post(
  "/webhook",
  expressAsyncHandler(async (req, res) => {
    const { id, email_addresses, first_name, last_name, profile_image_url, public_metadata } =
      req.body;

    if (!id || !email_addresses || !email_addresses[0]?.email) {
      return res.status(400).send({ message: "Invalid payload" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email_addresses[0].email });
    if (existingUser) {
      return res.status(200).send({ message: "User already exists" });
    }

    // Create a new user in the database
    try {
      const newUser = new User({
        userName: id,
        firstName: first_name || "Unknown",
        lastName: last_name || "Unknown",
        email: email_addresses[0].email,
        role: public_metadata?.role || "student",
        profileImageUrl: profile_image_url || "",
      });

      await newUser.save();
      res.status(201).send({ message: "User created successfully" });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).send({ message: "Internal server error" });
    }
  })
);

module.exports = clerkRouter;