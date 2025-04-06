const ex = require("express");
const app = ex();
const mongoose = require("mongoose");
require("dotenv").config();
const userApp = require("./routes/user");
const adminApp = require("./routes/admin");
const bookRouter = require("./routes/books");
const clerkRouter = require("./routes/clerk");
const cors = require("cors");
const port = process.env.PORT;
app.use(cors());
app.use(ex.json());
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("DATABASE CONNECTED");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit the process with an error code
  });
app.get("/basic", (req, res) => {
  console.log("basic");
});
app.use("/studentUser", userApp);
app.use("/admin", adminApp);
app.use("/books", bookRouter);
app.use("/clerk", clerkRouter);
