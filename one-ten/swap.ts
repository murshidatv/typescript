/*import * as readlineSync from 'readline-sync';

// Accept the size of the arrays
const size: number = parseInt(readlineSync.question('Enter the size of arrays: '));

// Accept values for Array 1
let array1: number[] = readlineSync.question('Enter the values of Array 1 (comma-separated): ')
    .split(',').map(Number);

// Accept values for Array 2
let array2: number[] = readlineSync.question('Enter the values of Array 2 (comma-separated): ')
    .split(',').map(Number);

// Swap the arrays
[array1, array2] = [array2, array1];

// Display the swapped arrays
console.log('Arrays after swapping:');
console.log('Array1:', array1.join(', '));
console.log('Array2:', array2.join(', '));
*/
import * as readlineSync from 'readline-sync';

// Initialize empty arrays
let userArray1: number[] = [];
let userArray2: number[] = [];

// Get the number of elements the user wants in the arrays
let numElements: number = parseInt(readlineSync.question("Enter the size of arrays: "));

// Populate Array 1
for (let i = 0; i < numElements; i++) {
    let userInput: number = parseFloat(readlineSync.question(`Enter element ${i + 1} for Array 1: `));
    userArray1.push(userInput);
}

// Populate Array 2
for (let i = 0; i < numElements; i++) {
    let userInput: number = parseFloat(readlineSync.question(`Enter element ${i + 1} for Array 2: `));
    userArray2.push(userInput);
}

// Display the entered arrays
console.log(`\nArray 1 = ${userArray1}`);
console.log(`Array 2 = ${userArray2}`);

// Array Swapping
let temp: number[] = userArray1;
userArray1 = userArray2;
userArray2 = temp;

// Display the swapped arrays
console.log("\nArrays after swapping:");
console.log(`Array 1 = ${userArray1}`);
console.log(`Array 2 = ${userArray2}`);
