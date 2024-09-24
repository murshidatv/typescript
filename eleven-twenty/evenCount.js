"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var arr = [];
var count = 0;
var size = parseInt(readLineSync.question('Enter size of array: '));
// Accepting the values from the user and storing in the array
for (var i = 0; i < size; i++) {
    var value = parseInt(readLineSync.question("Enter element ".concat(i + 1, ": ")));
    arr.push(value);
    // Checking if the element is even
    if (arr[i] % 2 === 0) {
        count++; // Increment count for even numbers
    }
}
// Display the result
console.log("Number of even numbers in the given array is: ".concat(count));
