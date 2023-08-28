class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  searchByTitle(title) {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  searchByAuthor(author) {
    return this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  getTotalBooks() {
    return this.books.length;
  }
}

module.exports = Library;
