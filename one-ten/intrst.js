"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var P = parseFloat(readLineSync.question('Enter principal amount:'));
var n = parseFloat(readLineSync.question('Enter number of years:'));
var R = parseFloat(readLineSync.question('Enter rate of interest:'));
var SI = n * P * R / 100;
console.log("Simple interst is:", SI);
