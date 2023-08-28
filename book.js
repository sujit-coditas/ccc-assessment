class Book {
  constructor(title, author, publicationYear) {
    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof publicationYear !== "number" ||
      publicationYear < 0 ||
      publicationYear > new Date().getFullYear()
    ) {
      throw new Error("Invalid input for book details.");
    }
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  updateDetails(newTitle, newAuthor, newPublicationYear) {
    if (
      typeof newTitle !== "string" ||
      typeof newAuthor !== "string" ||
      typeof newPublicationYear !== "number" ||
      newPublicationYear < 0 ||
      newPublicationYear > new Date().getFullYear()
    ) {
      throw new Error("Invalid input for book details.");
    }
    this.title = newTitle;
    this.author = newAuthor;
    this.publicationYear = newPublicationYear;
  }
}

module.exports = Book;
