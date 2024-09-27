"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Accept the size of the array
var size = parseInt(readlineSync.question('Enter the array limit: '));
// Declare the arrays
var arr = [];
var resultArr = [];
// Accept values for the array
console.log('Enter the values of array:');
for (var i = 0; i < size; i++) {
    var value = parseInt(readlineSync.question("Enter element ".concat(i + 1, ": ")));
    arr.push(value);
}
// Multiply adjacent values and store them in the result array
for (var i = 0; i < size - 1; i++) {
    resultArr.push(arr[i] * arr[i + 1]);
}
// Display the result array
console.log('Output:');
console.log(resultArr.join('\t'));
