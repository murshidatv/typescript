"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Accept the size of the arrays
var size = parseInt(readlineSync.question('Enter the size of arrays: '));
// Accept values for Array 1
var array1 = readlineSync.question('Enter the values of Array 1 (comma-separated): ')
    .split(',').map(Number);
// Accept values for Array 2
var array2 = readlineSync.question('Enter the values of Array 2 (comma-separated): ')
    .split(',').map(Number);
// Swap the arrays
_a = [array2, array1], array1 = _a[0], array2 = _a[1];
// Display the swapped arrays
console.log('Arrays after swapping:');
console.log('Array1:', array1.join(', '));
console.log('Array2:', array2.join(', '));
