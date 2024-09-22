"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Accept the user's input and convert it to numbers
var num1 = parseFloat(readlineSync.question("Enter first number: "));
var num2 = parseFloat(readlineSync.question("Enter second number: "));
// Calculate the sum
var sum = num1 + num2;
// Display the result
console.log('Sum of two numbers is: ' + sum);
