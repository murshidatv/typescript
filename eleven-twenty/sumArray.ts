import * as readLineSync from 'readline-sync';

// Function to get a 2D array input from the user
function getArray(size: number, arrayNum: number): number[][] {
    let arr: number[][] = [];
    console.log(`Enter values for Array ${arrayNum}:`);
    for (let i = 0; i < size; i++) {
        let row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(parseInt(readLineSync.question(`Enter element [${i}][${j}]: `)));
        }
        arr.push(row);
    }
    return arr;
}

// Get the size of the 2D arrays
const size: number = parseInt(readLineSync.question('Enter the size of the arrays: '));

// Input for two 2D arrays
const array1 = getArray(size, 1);
const array2 = getArray(size, 2);

// Add two 2D arrays
let sumArray: number[][] = [];
for (let i = 0; i < size; i++) {
    let rowSum: number[] = [];
    for (let j = 0; j < size; j++) {
        rowSum.push(array1[i][j] + array2[i][j]);
    }
    sumArray.push(rowSum);
}

// Display the sum of the two arrays
console.log('Sum of the two arrays:');
for (let i = 0; i < size; i++) {
    console.log(sumArray[i].join(' '));
}
