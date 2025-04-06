const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userApp = require("./routes/user");
const adminApp = require("./routes/admin");
const bookRouter = require("./routes/books");
const clerkRouter = require("./routes/clerk");

const port = process.env.PORT || 1986;

// ✅ Enable CORS with frontend origin (optional but recommended)
const allowedOrigins = ["http://localhost:5173"]; // Add other origins if needed
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("✅ DATABASE CONNECTED");
    app.listen(port, () => {
      console.log(`🚀 Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });

// Basic test route
app.get("/basic", (req, res) => {
  console.log("✅ basic route hit");
  res.send({ message: "Basic route working" });
});

// Route setup
app.use("/studentUser", userApp);
app.use("/admin", adminApp);
app.use("/books", bookRouter);
app.use("/clerk", clerkRouter);
