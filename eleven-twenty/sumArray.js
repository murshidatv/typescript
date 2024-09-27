"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
// Function to get a 2D array input from the user
function getArray(size, arrayNum) {
    var arr = [];
    console.log("Enter values for Array ".concat(arrayNum, ":"));
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            row.push(parseInt(readLineSync.question("Enter element [".concat(i, "][").concat(j, "]: "))));
        }
        arr.push(row);
    }
    return arr;
}
// Get the size of the 2D arrays
var size = parseInt(readLineSync.question('Enter the size of the arrays: '));
// Input for two 2D arrays
var array1 = getArray(size, 1);
var array2 = getArray(size, 2);
// Add two 2D arrays
var sumArray = [];
for (var i = 0; i < size; i++) {
    var rowSum = [];
    for (var j = 0; j < size; j++) {
        rowSum.push(array1[i][j] + array2[i][j]);
    }
    sumArray.push(rowSum);
}
// Display the sum of the two arrays
console.log('Sum of the two arrays:');
for (var i = 0; i < size; i++) {
    console.log(sumArray[i].join(' '));
}
