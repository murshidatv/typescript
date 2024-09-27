"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Function to get values of a 2D array from the user
function getArray(size) {
    var array = [];
    console.log("Enter the values for the array:");
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            var value = parseInt(readlineSync.question("Enter element at position [".concat(i + 1, "][").concat(j + 1, "]: ")));
            row.push(value);
        }
        array.push(row);
    }
    return array;
}
// Function to add two 2D arrays
function addArray(array1, array2, size) {
    var resultArray = [];
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        resultArray.push(row);
    }
    return resultArray;
}
// Function to display a 2D array
function displayArray(array, size) {
    console.log('Sum of array 1 and array 2:');
    for (var i = 0; i < size; i++) {
        console.log(array[i].join('\t'));
    }
}
// Main function
function main() {
    // Accept the size of the arrays
    var size = parseInt(readlineSync.question('Enter the size of the arrays: '));
    // Get array 1 and array 2 from the user
    console.log('Enter the values for array 1');
    var array1 = getArray(size);
    console.log('Enter the values for array 2');
    var array2 = getArray(size);
    // Add array 1 and array 2
    var resultArray = addArray(array1, array2, size);
    // Display the result array
    displayArray(resultArray, size);
}
// Call the main function
main();
