import * as readlineSync from 'readline-sync';

// Class to handle 2D array operations
class TwoDArray {
    private array: number[][] = [];
    private size: number;

    constructor(size: number) {
        this.size = size;
    }

    // Method to get values for the 2D array
    public getArray(): void {
        console.log('Enter the array values:');
        for (let i = 0; i < this.size; i++) {
            let row: number[] = [];
            for (let j = 0; j < this.size; j++) {
                let value: number = parseInt(readlineSync.question(`Enter element at position [${i + 1}][${j + 1}]: `));
                row.push(value);
            }
            this.array.push(row);
        }
    }

    // Method to display the 2D array
    public displayArray(): void {
        console.log('Array elements are:');
        for (let i = 0; i < this.size; i++) {
            console.log(this.array[i].join('\t'));
        }
    }
}

// Main function to execute the program
function main(): void {
    // Accept the size of the array from the user
    let size: number = parseInt(readlineSync.question('Enter the size of array: '));

    // Create an instance of the TwoDArray class
    let twoDArray = new TwoDArray(size);

    // Call the method to get array values
    twoDArray.getArray();

    // Call the method to display the array values
    twoDArray.displayArray();
}

// Call the main function to start the program
main();
