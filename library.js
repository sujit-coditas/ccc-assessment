const Book = require("./book");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.validateBookInstance(book);
    this.books.push(book);
  }

  validateBookInstance(book) {
    if (!(book instanceof Book)) {
      throw new Error(
        "Only instances of the Book class can be added to the library."
      );
    }
  }

  searchByTitle(title) {
    this.validateSearchInput(title);
    const results = this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
    this.logSearchResults(results);
    return results;
  }

  searchByAuthor(author) {
    this.validateSearchInput(author);
    const results = this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
    this.logSearchResults(results);
    return results;
  }

  validateSearchInput(input) {
    if (typeof input !== "string") {
      throw new Error("Invalid input type for search.");
    }
  }

  logSearchResults(results) {
    if (results.length === 0) {
      console.log("No books found.");
    }
  }

  getTotalBooks() {
    return this.books.length;
  }
}

module.exports = Library;
