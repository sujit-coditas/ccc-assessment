class Book {
  constructor(title, author, publicationYear) {
    this.validateBookDetails(title, author, publicationYear);
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  updateDetails(newTitle, newAuthor, newPublicationYear) {
    this.validateBookDetails(newTitle, newAuthor, newPublicationYear);
    this.title = newTitle;
    this.author = newAuthor;
    this.publicationYear = newPublicationYear;
  }

  validateBookDetails(title, author, publicationYear) {
    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof publicationYear !== "number" ||
      publicationYear < 0 ||
      publicationYear > new Date().getFullYear()
    ) {
      throw new Error("Invalid input for book details.");
    }
  }
}

module.exports = Book;
