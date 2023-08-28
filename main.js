const Book = require("./book");
const Library = require("./library");

const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
const book2 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);

const library = new Library();
library.addBook(book1);
library.addBook(book2);

console.log("Total books in the library:", library.getTotalBooks());

const searchResults = library.searchByAuthor("Robert C. Martin");
console.log("Books by author:", searchResults);
