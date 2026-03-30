const express = require("express");
const app = express();

app.use(express.json());

// Dummy data
let books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" }
];

let authors = [
  { id: 1, name: "Author One" },
  { id: 2, name: "Author Two" }
];


// ---------------- BOOK ROUTES ----------------

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title
  };
  books.push(newBook);
  res.json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.send("Book not found");
  }

  book.title = req.body.title;
  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  books = books.filter(b => b.id !== id);

  res.send("Book deleted");
});


// ---------------- AUTHOR ROUTES ----------------

// GET all authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

// POST new author
app.post("/authors", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name
  };
  authors.push(newAuthor);
  res.json(newAuthor);
});

// PUT update author
app.put("/authors/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const author = authors.find(a => a.id === id);

  if (!author) {
    return res.send("Author not found");
  }

  author.name = req.body.name;
  res.json(author);
});

// DELETE author
app.delete("/authors/:id", (req, res) => {
  const id = parseInt(req.params.id);

  authors = authors.filter(a => a.id !== id);

  res.send("Author deleted");
});


// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});