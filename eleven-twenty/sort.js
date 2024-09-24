"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var arr = [];
var size = parseInt(readLineSync.question('Enter the size of an array: '));
// Accept values for the array from the user
for (var i = 0; i < size; i++) {
    var value = parseInt(readLineSync.question("Enter element ".concat(i + 1, ": ")));
    arr.push(value);
}
// Sort the array in descending order
arr.sort(function (a, b) { return b - a; });
// Display the sorted array
console.log('Sorted array in descending order:');
console.log(arr.join(', '));
