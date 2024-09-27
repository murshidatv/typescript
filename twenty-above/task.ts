// Base class
abstract class LibraryItem {
    constructor(public title: string, public author: string, public year: number) {}

    abstract displayInfo(): void; // Abstract method for polymorphism
}

// Derived class for books
class Book extends LibraryItem {
    constructor(title: string, author: string, year: number, public genre: string) {
        super(title, author, year);
    }

    displayInfo(): void {
        console.log(`Book: ${this.title} by ${this.author}, Genre: ${this.genre}, Year: ${this.year}`);
    }
}

// Derived class for magazines
class Magazine extends LibraryItem {
    constructor(title: string, author: string, year: number, public issueNumber: number) {
        super(title, author, year);
    }

    displayInfo(): void {
        console.log(`Magazine: ${this.title} by ${this.author}, Issue: ${this.issueNumber}, Year: ${this.year}`);
    }
}

// Class to manage library members
class Member {
    private borrowedItems: LibraryItem[] = [];

    constructor(public name: string, public memberId: number) {}

    borrowItem(item: LibraryItem): void {
        this.borrowedItems.push(item);
        console.log(`${this.name} borrowed "${item.title}"`);
    }

    returnItem(item: LibraryItem): void {
        const index = this.borrowedItems.indexOf(item);
        if (index > -1) {
            this.borrowedItems.splice(index, 1);
            console.log(`${this.name} returned "${item.title}"`);
        } else {
            console.log(`${item.title} is not borrowed by ${this.name}`);
        }
    }

    listBorrowedItems(): void {
        console.log(`${this.name}'s borrowed items:`);
        this.borrowedItems.forEach(item => item.displayInfo());
    }
}

// Class to manage the library
class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Added: "${item.title}" to the library.`);
    }

    listItems(): void {
        console.log('Library Items:');
        this.items.forEach(item => item.displayInfo());
    }
}

// Example Usage
const library = new Library();

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction');
const magazine1 = new Magazine('National Geographic', 'Various', 2023, 1);

library.addItem(book1);
library.addItem(magazine1);

library.listItems();

const member1 = new Member('Alice', 101);
member1.borrowItem(book1);
member1.listBorrowedItems();

member1.returnItem(book1);
member1.listBorrowedItems();
