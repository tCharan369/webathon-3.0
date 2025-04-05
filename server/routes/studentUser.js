const ex = require("express");
const studentUserApp = ex.Router();
const expressAsyncHandler = require("express-async-handler");

const StudentUser = require("../Models/User");

//checking userInDb Or not

studentUserApp.post(
  "/createUser",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
    // if user already existed
    const userInDb = await StudentUser.findOne({ email: newUser.email });
    if (userInDb) {
      return res.send({ message: "UserAlready existed" });
    }
    const userObj = new StudentUser(newUser);
    const userDoc = await userObj.save();
    return res.send({ message: "user created", payload: userDoc });
  })
);

studentUserApp.get("/getUsers", async (req, res) => {
  console.log("CREATE USERS");
});
module.exports = studentUserApp;
