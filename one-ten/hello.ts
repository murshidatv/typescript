// Import readline-sync to take input
import * as readlineSync from 'readline-sync';

// Accept the user's character input
let charInput: string = readlineSync.question("Enter your name: ");

// Display the input on the console
console.log("Hello, " + charInput + " Good Morning !!!");
