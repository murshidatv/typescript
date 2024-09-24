"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var readlineSync = require("readline-sync");
// Initialize empty arrays
var userArray1 = [];
var userArray2 = [];
// Get the number of elements the user wants in the arrays
var numElements = parseInt(readlineSync.question("Enter the size of arrays: "));
// Populate Array 1
for (var i = 0; i < numElements; i++) {
    var userInput = parseFloat(readlineSync.question("Enter element ".concat(i + 1, " for Array 1: ")));
    userArray1.push(userInput);
}
// Populate Array 2
for (var i = 0; i < numElements; i++) {
    var userInput = parseFloat(readlineSync.question("Enter element ".concat(i + 1, " for Array 2: ")));
    userArray2.push(userInput);
}
// Display the entered arrays
console.log("\nArray 1 = ".concat(userArray1));
console.log("Array 2 = ".concat(userArray2));
// Array Swapping
var temp = userArray1;
userArray1 = userArray2;
userArray2 = temp;
// Display the swapped arrays
console.log("\nArrays after swapping:");
console.log("Array 1 = ".concat(userArray1));
console.log("Array 2 = ".concat(userArray2));
