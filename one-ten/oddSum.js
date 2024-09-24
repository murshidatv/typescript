"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var limit = parseInt(readlineSync.question('Enter the limit:'));
var sum = 0;
for (var i = 1; i < limit; i += 2) {
    sum += i;
}
// Display the result
console.log("Sum of odd numbers = ".concat(sum));
