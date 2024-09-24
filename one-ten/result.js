"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var mark = parseFloat(readLineSync.question('Enter your mark:'));
if (mark >= 50) {
    console.log("Passed");
}
else {
    console.log("failed");
}
