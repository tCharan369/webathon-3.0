const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Books = require("../Models/Books");
const { checkFaculty, checkValidUser } = require("../middleware/checkUserRole");

const bookRouter = express.Router();

//  Upload a new book (Faculty only)
bookRouter.post(
  "/upload",
  checkFaculty,
  expressAsyncHandler(async (req, res) => {
    const { category, title, author, tags, userId } = req.body;

    const newBook = new Books({
      category,
      title,
      author,
      tags,
      uploadedBy: userId,
    });

    const saved = await newBook.save();
    res.status(201).send({ message: "Book uploaded", payload: saved });
  })
);

//  Take a book (Any valid user)
bookRouter.patch(
  "/take/:bookId",
  checkValidUser,
  expressAsyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const { userId } = req.body;

    const book = await Books.findById(bookId);
    if (!book) return res.status(404).send({ message: "Book not found" });
    if (book.status === "taken") {
      return res.status(400).send({ message: "Book already taken" });
    }

    book.status = "taken";
    book.takenBy = userId;
    const updated = await book.save();

    res.send({ message: "Book taken successfully", payload: updated });
  })
);

//  Return a book
bookRouter.patch(
  "/return/:bookId",
  checkValidUser,
  expressAsyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const { userId } = req.body;

    const book = await Books.findById(bookId);
    if (!book) return res.status(404).send({ message: "Book not found" });

    if (String(book.takenBy) !== String(userId)) {
      return res.status(403).send({ message: "You did not take this book" });
    }

    book.status = "available";
    book.takenBy = null;
    const updated = await book.save();

    res.send({ message: "Book returned", payload: updated });
  })
);

//  Get all books
bookRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const books = await Books.find()
      .populate("uploadedBy", "firstName lastName email")
      .populate("takenBy", "firstName lastName email");
    res.send({ message: "All books", payload: books });
  })
);

//  Get book by ID
bookRouter.get(
  "/:bookId",
  expressAsyncHandler(async (req, res) => {
    const book = await Books.findById(req.params.bookId)
      .populate("uploadedBy", "firstName lastName email")
      .populate("takenBy", "firstName lastName email");

    if (!book) return res.status(404).send({ message: "Book not found" });
    res.send({ message: "Book found", payload: book });
  })
);

module.exports = bookRouter;
