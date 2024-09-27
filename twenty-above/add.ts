
import * as readlineSync from 'readline-sync';

// Function to get values of a 2D array from the user
function getArray(size: number): number[][] {
    let array: number[][] = [];
    console.log(`Enter the values for the array:`);

    for (let i = 0; i < size; i++) {
        let row: number[] = [];
        for (let j = 0; j < size; j++) {
            let value: number = parseInt(readlineSync.question(`Enter element at position [${i + 1}][${j + 1}]: `));
            row.push(value);
        }
        array.push(row);
    }
    return array;
}

// Function to add two 2D arrays
function addArray(array1: number[][], array2: number[][], size: number): number[][] {
    let resultArray: number[][] = [];

    for (let i = 0; i < size; i++) {
        let row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        resultArray.push(row);
    }
    return resultArray;
}

// Function to display a 2D array
function displayArray(array: number[][], size: number): void {
    console.log('Sum of array 1 and array 2:');
    for (let i = 0; i < size; i++) {
        console.log(array[i].join('\t'));
    }
}

// Main function
function main(): void {
    // Accept the size of the arrays
    let size: number = parseInt(readlineSync.question('Enter the size of the arrays: '));

    // Get array 1 and array 2 from the user
    console.log('Enter the values for array 1');
    let array1 = getArray(size);

    console.log('Enter the values for array 2');
    let array2 = getArray(size);

    // Add array 1 and array 2
    let resultArray = addArray(array1, array2, size);

    // Display the result array
    displayArray(resultArray, size);
}

// Call the main function
main();
