let myLibrary = [];

// creating objects
function book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false; // from string to boolean
}

// insert created objects to array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
}

// sample books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "310 pages", false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "281 pages", false);
addBookToLibrary("1984", "George Orwell", "328 pages", false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180 pages", false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "432 pages", false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "277 pages", false);
addBookToLibrary("Moby Dick", "Herman Melville", "635 pages", false);
addBookToLibrary("The Alchemist", "Paulo Coelho", "208 pages", false);

// DOM Manipulators
// display each books to page
const container = document.querySelector(".bookContainer");

function displayBooks() {
  for (book of myLibrary) {
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("data-id", book.id); // attach book id to DOM so we can identify/remove this book later

    for (const [key, value] of Object.entries(book)) {
      if (key === "id") continue;

      const infoDiv = document.createElement("div");
      // boolean to text
      if (key === "read" && !value) {
        infoDiv.textContent = "To Read";
      } else if (key === "read" && value) {
        infoDiv.textContent = "Read";
      } else {
        infoDiv.textContent = value;
      }
      infoDiv.classList.add("infoDiv");
      bookDiv.append(infoDiv);
    }

    // change button text depending on boolean
    const removeBtn = document.createElement("button");
    const markBtn = document.createElement("button");
    removeBtn.classList.add("editBookBtn");
    markBtn.classList.add("editBookBtn");

    removeBtn.textContent = "Remove Book";
    if (book.read === false) markBtn.textContent = "Mark as Read";
    else markBtn.textContent = "Mark as Unread";

    bookDiv.append(removeBtn, markBtn);

    bookDiv.classList.add("bookDiv");
    container.append(bookDiv);
  }
}

// add new book button
const nbDialog = document.getElementById("nbDialog");
const newBook = document.querySelector(".NewBook");

newBook.addEventListener("click", () => nbDialog.showModal());

// buttons inside bookDiv
// remove book
container.addEventListener("click", (event) => {
  const targetDiv = event.target.closest(".bookDiv");
  const targetId = targetDiv.dataset.id;
  if (event.target.textContent === "Remove Book") {
    myLibrary = myLibrary.filter((book) => book.id != targetId);

    container.innerHTML = "";
    displayBooks();
  }
  // mark as read
  else if (
    event.target.textContent === "Mark as Read" ||
    event.target.textContent === "Mark as Unread"
  ) {
    targetBook = myLibrary.find((book) => book.id === targetId);
    if (targetBook.read === false) {
      targetBook.read = true;
    } else {
      targetBook.read = false;
    }

    container.innerHTML = "";
    displayBooks();
  }
});

displayBooks();
