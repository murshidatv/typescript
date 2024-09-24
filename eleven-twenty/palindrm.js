"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var str = readLineSync.question('enter a string :');
var reversed;
reversed = str.split('').reverse().join('');
if (str === reversed) {
    console.log('is Palindrome');
}
else {
    console.log("is not palindrome");
}
