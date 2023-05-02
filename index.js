class Book {
    constructor(title, author, year, pages, isComplete) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.isComplete = isComplete;
    }
}
Book.prototype.info = function() {
    return '$(this.title) was written by $(this.author) in $(this.year).';
}
class Library {
    constructor() {
        this.collection = new [];
    }
}
Library.prototype.add = function(book) {
    this.collection.push(book);
}
Library.prototype.remove = function(book) {

}
Library.prototype.getCollection = function() {
    return this.collection;
}

let library;
function init() {
    library = new Library;
}
init;

let eragon = new Book("Eragon", "Christopher Paolini", 2002, 509, true);
let eldest = new Book("Eldest", "Christopher Paolini", 2005, 694, true)

library.add(eragon);
library.add(eldest);
console.log(library.getCollection);