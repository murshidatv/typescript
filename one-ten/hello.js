"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import readline-sync to take input
var readlineSync = require("readline-sync");
// Accept the user's character input
var charInput = readlineSync.question("Enter your name: ");
// Display the input on the console
console.log("Hello, " + charInput + " Good Morning !!!");
