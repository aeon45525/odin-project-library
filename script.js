const myLibrary = [];

function book(title, author, pages, year) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}

function addBookToLibrary(title, author, pages, year) {
  const newBook = new book(title, author, pages, year);
  myLibrary.push(newBook);
}

// sample books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "310 pages", "1937");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "281 pages", "1960");
addBookToLibrary("1984", "George Orwell", "328 pages", "1949");
addBookToLibrary(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "180 pages",
  "1925",
);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "432 pages", "1813");
addBookToLibrary(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "277 pages",
  "1951",
);
addBookToLibrary("Moby Dick", "Herman Melville", "635 pages", "1851");
addBookToLibrary("The Alchemist", "Paulo Coelho", "208 pages", "1988");

console.log(myLibrary);

// DOM Manipulators
const container = document.querySelector(".container");

for (let i = 1; i <= myLibrary.length; i++) {
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const yearDiv = document.createElement("div");
  const book = myLibrary[i - 1];

  titleDiv.textContent = book.title;
  authorDiv.textContent = book.author;
  pagesDiv.textContent = book.pages;
  yearDiv.textContent = book.year;

  bookDiv.append(titleDiv, authorDiv, pagesDiv, yearDiv);
  bookDiv.classList.add("bookDiv");
  container.append(bookDiv);
}
