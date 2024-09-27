import * as readLineSync from 'readline-sync';

// Main function
function main() {
    let arr: number[] = [];
    
    // Call getArray function to populate the array
    arr = getArray();

    // Call displayArray function to display the array
    displayArray(arr);
}

// Function to get values from the user and populate the array
function getArray(): number[] {
    let size: number = parseInt(readLineSync.question('Enter the size of the array: '));
    let array: number[] = [];

    for (let i = 0; i < size; i++) {
        let value = parseInt(readLineSync.question(`Enter element ${i + 1}: `));
        array.push(value);
    }

    return array;
}

// Function to display the array values
function displayArray(array: number[]): void {
    console.log('The array values are:');
    console.log(array.join(', '));
}

// Call the main function to run the program
main();
