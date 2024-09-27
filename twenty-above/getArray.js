"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Class to handle 2D array operations
var TwoDArray = /** @class */ (function () {
    function TwoDArray(size) {
        this.array = [];
        this.size = size;
    }
    // Method to get values for the 2D array
    TwoDArray.prototype.getArray = function () {
        console.log('Enter the array values:');
        for (var i = 0; i < this.size; i++) {
            var row = [];
            for (var j = 0; j < this.size; j++) {
                var value = parseInt(readlineSync.question("Enter element at position [".concat(i + 1, "][").concat(j + 1, "]: ")));
                row.push(value);
            }
            this.array.push(row);
        }
    };
    // Method to display the 2D array
    TwoDArray.prototype.displayArray = function () {
        console.log('Array elements are:');
        for (var i = 0; i < this.size; i++) {
            console.log(this.array[i].join('\t'));
        }
    };
    return TwoDArray;
}());
// Main function to execute the program
function main() {
    // Accept the size of the array from the user
    var size = parseInt(readlineSync.question('Enter the size of array: '));
    // Create an instance of the TwoDArray class
    var twoDArray = new TwoDArray(size);
    // Call the method to get array values
    twoDArray.getArray();
    // Call the method to display the array values
    twoDArray.displayArray();
}
// Call the main function to start the program
main();
