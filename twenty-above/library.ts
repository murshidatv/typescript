interface Book {
    title: string;
    author: string;
    readingStatus: boolean;
}

const library: Book[] = [ 
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
function displayReadingStatus(library: Book[]): void {
    library.forEach(book => {
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`);
        } else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`);
        }
    });
}

// Call the function to display the reading status of books
displayReadingStatus(library);
