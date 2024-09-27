"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calculateGrade() {
    // Accept scores from the user
    var writtenTest = parseFloat(readlineSync.question('Enter the marks scored in Written Test: '));
    var labExams = parseFloat(readlineSync.question('Enter the marks scored in Lab Exams: '));
    var assignments = parseFloat(readlineSync.question('Enter the marks scored in Assignments: '));
    // Define weights for each component
    var writtenTestWeight = 0.7; // 70%
    var labExamsWeight = 0.2; // 20%
    var assignmentsWeight = 0.1; // 10%
    // Calculate weighted average
    var weightedAverage = (writtenTest * writtenTestWeight) +
        (labExams * labExamsWeight) +
        (assignments * assignmentsWeight);
    // Display the grade
    console.log("Grade of the student is: ".concat(weightedAverage.toFixed(2)));
}
// Call the function to execute the program
calculateGrade();
