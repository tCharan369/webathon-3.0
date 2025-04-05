const ex = require("express");
const app = ex();
const mongoose = require("mongoose");
require("dotenv").config();
const userApp = require("./routes/user");
const adminApp = require("./routes/admin");
const bookRouter = require("./routes/books");
const port = process.env.PORT;
app.use(ex.json());
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("DATABASE CONNECTED");
    app.listen(port, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/basic", (req, res) => {
  console.log("basic");
});
app.use("/studentUser", userApp);
app.use("/admin", adminApp);
app.use("/books", bookRouter);
