"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calculator() {
    var num1;
    var num2;
    var operation;
    // Get numbers from the user
    num1 = parseFloat(readlineSync.question('Enter the first number: '));
    num2 = parseFloat(readlineSync.question('Enter the second number: '));
    // Display menu options
    console.log('\nSelect an operation:');
    console.log('1. Addition (+)');
    console.log('2. Subtraction (-)');
    console.log('3. Multiplication (*)');
    console.log('4. Division (/)');
    console.log('5. Exit');
    // Get the user's choice
    operation = readlineSync.question('Enter your choice (1-5): ');
    // Perform the operation based on user choice
    switch (operation) {
        case '1':
            console.log("Result: ".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2));
            break;
        case '2':
            console.log("Result: ".concat(num1, " - ").concat(num2, " = ").concat(num1 - num2));
            break;
        case '3':
            console.log("Result: ".concat(num1, " * ").concat(num2, " = ").concat(num1 * num2));
            break;
        case '4':
            if (num2 !== 0) {
                console.log("Result: ".concat(num1, " / ").concat(num2, " = ").concat(num1 / num2));
            }
            else {
                console.log('Error: Division by zero is not allowed.');
            }
            break;
        case '5':
            console.log('Exiting the program.');
            break;
        default:
            console.log('Invalid choice. Please select a valid option.');
    }
}
// Call the calculator function to run the program
calculator();
