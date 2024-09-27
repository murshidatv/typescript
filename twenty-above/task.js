var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class
var LibraryItem = /** @class */ (function () {
    function LibraryItem(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return LibraryItem;
}());
// Derived class for books
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, year, genre) {
        var _this = _super.call(this, title, author, year) || this;
        _this.genre = genre;
        return _this;
    }
    Book.prototype.displayInfo = function () {
        console.log("Book: ".concat(this.title, " by ").concat(this.author, ", Genre: ").concat(this.genre, ", Year: ").concat(this.year));
    };
    return Book;
}(LibraryItem));
// Derived class for magazines
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(title, author, year, issueNumber) {
        var _this = _super.call(this, title, author, year) || this;
        _this.issueNumber = issueNumber;
        return _this;
    }
    Magazine.prototype.displayInfo = function () {
        console.log("Magazine: ".concat(this.title, " by ").concat(this.author, ", Issue: ").concat(this.issueNumber, ", Year: ").concat(this.year));
    };
    return Magazine;
}(LibraryItem));
// Class to manage library members
var Member = /** @class */ (function () {
    function Member(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedItems = [];
    }
    Member.prototype.borrowItem = function (item) {
        this.borrowedItems.push(item);
        console.log("".concat(this.name, " borrowed \"").concat(item.title, "\""));
    };
    Member.prototype.returnItem = function (item) {
        var index = this.borrowedItems.indexOf(item);
        if (index > -1) {
            this.borrowedItems.splice(index, 1);
            console.log("".concat(this.name, " returned \"").concat(item.title, "\""));
        }
        else {
            console.log("".concat(item.title, " is not borrowed by ").concat(this.name));
        }
    };
    Member.prototype.listBorrowedItems = function () {
        console.log("".concat(this.name, "'s borrowed items:"));
        this.borrowedItems.forEach(function (item) { return item.displayInfo(); });
    };
    return Member;
}());
// Class to manage the library
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("Added: \"".concat(item.title, "\" to the library."));
    };
    Library.prototype.listItems = function () {
        console.log('Library Items:');
        this.items.forEach(function (item) { return item.displayInfo(); });
    };
    return Library;
}());
// Example Usage
var library = new Library();
var book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction');
var magazine1 = new Magazine('National Geographic', 'Various', 2023, 1);
library.addItem(book1);
library.addItem(magazine1);
library.listItems();
var member1 = new Member('Alice', 101);
member1.borrowItem(book1);
member1.listBorrowedItems();
member1.returnItem(book1);
member1.listBorrowedItems();
