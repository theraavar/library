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