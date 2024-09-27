"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
// Main function
function main() {
    var arr = [];
    // Call getArray function to populate the array
    arr = getArray();
    // Call displayArray function to display the array
    displayArray(arr);
}
// Function to get values from the user and populate the array
function getArray() {
    var size = parseInt(readLineSync.question('Enter the size of the array: '));
    var array = [];
    for (var i = 0; i < size; i++) {
        var value = parseInt(readLineSync.question("Enter element ".concat(i + 1, ": ")));
        array.push(value);
    }
    return array;
}
// Function to display the array values
function displayArray(array) {
    console.log('The array values are:');
    console.log(array.join(', '));
}
// Call the main function to run the program
main();
