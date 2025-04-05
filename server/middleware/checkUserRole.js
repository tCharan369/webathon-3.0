const User = require("../Models/User");

const checkFaculty = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).send({ message: "userId is required" });

  const user = await User.findById(userId);
  if (!user) return res.status(404).send({ message: "User not found" });

  if (user.role !== "faculty") {
    return res
      .status(403)
      .send({ message: "Only faculty can perform this action" });
  }

  req.user = user; // attach user to req for later use
  next();
};

const checkValidUser = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).send({ message: "userId is required" });

  const user = await User.findById(userId);
  if (!user) return res.status(404).send({ message: "User not found" });

  req.user = user;
  next();
};

module.exports = { checkFaculty, checkValidUser };
