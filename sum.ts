import * as readlineSync from 'readline-sync';

// Accept the user's input and convert it to numbers
let num1: number = parseFloat(readlineSync.question("Enter first number: "));
let num2: number = parseFloat(readlineSync.question("Enter second number: "));

// Calculate the sum
let sum: number = num1 + num2;

// Display the result
console.log('Sum of two numbers is: ' + sum);
