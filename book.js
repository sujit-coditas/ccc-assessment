class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  updateDetails(newTitle, newAuthor, newPublicationYear) {
    this.title = newTitle;
    this.author = newAuthor;
    this.publicationYear = newPublicationYear;
  }
}

module.exports = Book;
