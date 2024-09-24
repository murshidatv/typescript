"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
