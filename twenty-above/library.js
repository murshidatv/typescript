var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
// Function to display the status of each book
function displayReadingStatus(library) {
    library.forEach(function (book) {
        if (book.readingStatus) {
            console.log("Already read '".concat(book.title, "' by ").concat(book.author, "."));
        }
        else {
            console.log("You still need to read '".concat(book.title, "' by ").concat(book.author, "."));
        }
    });
}
// Call the function to display the reading status of books
displayReadingStatus(library);
