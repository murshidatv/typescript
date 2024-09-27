"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calculateIncomeTax() {
    // Accept annual income from the user
    var annualIncome = parseFloat(readlineSync.question('Enter the annual income: '));
    var taxAmount = 0;
    // Calculate tax based on income brackets
    if (annualIncome <= 250000) {
        taxAmount = 0; // No tax
    }
    else if (annualIncome > 250000 && annualIncome <= 500000) {
        taxAmount = (annualIncome * 0.05); // 5% tax
    }
    else if (annualIncome > 500000 && annualIncome <= 1000000) {
        taxAmount = (annualIncome * 0.20); // 20% tax
    }
    else if (annualIncome > 1000000 && annualIncome <= 5000000) {
        taxAmount = (annualIncome * 0.30); // 30% tax
    }
    // Display the calculated tax amount
    console.log("Income tax amount = ".concat(taxAmount.toFixed(2)));
}
// Call the function to execute the program
calculateIncomeTax();
