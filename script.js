function book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const harryPotter = new book(
  "Harry Potter",
  "JK Rowling",
  "495 pages",
  "have read",
);
console.log(harryPotter.info());
