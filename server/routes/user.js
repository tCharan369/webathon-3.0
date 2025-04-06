// const ex = require("express");
// const userApp = ex.Router();
// const expressAsyncHandler = require("express-async-handler");

// const User = require("../Models/User");

// //  Create user
// // POST /api/users
// userApp.post("/api/users", async (req, res) => {
//   const { clerkId, email, fullName, profileImage, role } = req.body;

//   try {
//     const existing = await User.findOne({ clerkId });
//     if (!existing) {
//       const newUser = new User({ clerkId, email, fullName, profileImage, role });
//       await newUser.save();
//     }
//     res.status(200).json({ message: "User stored" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// //  Get all users
// userApp.get(
//   "/getUsers",
//   expressAsyncHandler(async (req, res) => {
//     try {
//       const users = await User.find();
//       res.status(200).send({ message: "Users fetched successfully", payload: users });
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       res.status(500).send({ message: "Error fetching users", error });
//     }
//   })
// );

// //  Get single user by ID
// userApp.get(
//   "/getUser/:id",
//   expressAsyncHandler(async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id);
//       if (!user) return res.status(404).send({ message: "User not found" });
//       res.send({ message: "User found", payload: user });
//     } catch (error) {
//       res.status(500).send({ message: "Error fetching user", error });
//     }
//   })
// );

// // Get user by Clerk ID
// userApp.get(
//   "/user/:clerkId",
//   expressAsyncHandler(async (req, res) => {
//     try {
//       const user = await User.findOne({ userName: req.params.clerkId }); // Match Clerk ID with userName
//       if (!user) return res.status(404).send({ message: "User not found" });
//       res.send({ message: "User found", payload: user });
//     } catch (error) {
//       console.error("Error fetching user by Clerk ID:", error);
//       res.status(500).send({ message: "Error fetching user", error });
//     }
//   })
// );

// // Update user details
// userApp.put(
//   "/updateUser/:id",
//   expressAsyncHandler(async (req, res) => {
//     const updatedData = req.body;
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       updatedData,
//       { new: true }
//     );
//     if (!updatedUser)
//       return res.status(404).send({ message: "User not found" });
//     res.send({ message: "User updated", payload: updatedUser });
//   })
// );

// // Block user (set isActive to false)
// userApp.patch(
//   "/blockUser/:id",
//   expressAsyncHandler(async (req, res) => {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { isActive: false },
//       { new: true } // Return the updated document
//     );
//     if (!updatedUser) {
//       return res.status(404).send({ message: "User not found" });
//     }
//     res.send({ message: "User blocked successfully", payload: updatedUser });
//   })
// );

// //  Reset Password
// userApp.put(
//   "/resetPassword/:id",
//   expressAsyncHandler(async (req, res) => {
//     const { newPassword } = req.body;
//     if (!newPassword) {
//       return res.status(400).send({ message: "New password is required" });
//     }
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { password: newPassword },
//       { new: true }
//     );
//     if (!updatedUser)
//       return res.status(404).send({ message: "User not found" });
//     res.send({ message: "Password reset", payload: updatedUser });
//   })
// );

// module.exports = userApp;
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