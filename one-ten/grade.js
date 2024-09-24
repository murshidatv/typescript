"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Accept the total mark percentage from the user
var totalMark = parseFloat(readlineSync.question('Enter your total mark percentage: '));
// Determine and display the grade based on the total mark percentage
if (totalMark > 90) {
    console.log("Grade: A");
}
else if (totalMark >= 80 && totalMark <= 89) {
    console.log("Grade: B");
}
else if (totalMark >= 70 && totalMark <= 79) {
    console.log("Grade: C");
}
else if (totalMark >= 60 && totalMark <= 69) {
    console.log("Grade: D");
}
else if (totalMark >= 50 && totalMark <= 59) {
    console.log("Grade: E");
}
else {
    console.log("Grade: Failed");
}
