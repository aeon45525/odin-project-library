const myLibrary = [];

// creating objects
function book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// insert created objects to array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
}

// sample books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "310 pages", "To Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "281 pages", "To Read");
addBookToLibrary("1984", "George Orwell", "328 pages", "To Read");
addBookToLibrary(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "180 pages",
  "To Read",
);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "432 pages", "To Read");
addBookToLibrary(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "277 pages",
  "To Read",
);
addBookToLibrary("Moby Dick", "Herman Melville", "635 pages", "To Read");
addBookToLibrary("The Alchemist", "Paulo Coelho", "208 pages", "To Read");

// DOM Manipulators
// display each books to page
const container = document.querySelector(".container");

for (book of myLibrary) {
  const bookDiv = document.createElement("div");

  for (const [key, value] of Object.entries(book)) {
    if (key === "id") continue;
    const infoDiv = document.createElement("div");
    infoDiv.textContent = value;
    infoDiv.classList.add("infoDiv");
    bookDiv.append(infoDiv);
  }

  const buttonNames = ["Remove Book", "Mark as Read"];
  for (let i = 0; i !== buttonNames.length; i++) {
    const newButton = document.createElement("button");
    newButton.textContent = buttonNames[i];
    newButton.classList.add("editBookBtn");
    bookDiv.append(newButton);
  }

  bookDiv.classList.add("bookDiv");
  container.append(bookDiv);
}

// add new book button
const newBook = document.querySelector(".NewBook");
