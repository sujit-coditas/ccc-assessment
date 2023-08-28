const Book = require("./book");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    } else {
      throw new Error(
        "Only instances of the Book class can be added to the library."
      );
    }
  }

  searchByTitle(title) {
    if (typeof title !== "string") {
      throw new Error("Invalid input type for search.");
    }

    const results = this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );

    if (results.length === 0) {
      console.log("No books found for the given title.");
    }

    return results;
  }

  searchByAuthor(author) {
    if (typeof author !== "string") {
      throw new Error("Invalid input type for search.");
    }

    const results = this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );

    if (results.length === 0) {
      console.log("No books found for the given author.");
    }

    return results;
  }

  getTotalBooks() {
    return this.books.length;
  }
}

module.exports = Library;
