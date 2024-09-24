"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var num = parseInt(readlineSync.question('Enter a number:'));
for (var i = 1; i <= 10; i++) {
    console.log("".concat(i, " x ").concat(num, " = ").concat(i * num));
}
