
import * as readLineSync from 'readline-sync';

let arr: number[] = [];
let count: number = 0;
let size: number = parseInt(readLineSync.question('Enter size of array: '));

// Accepting the values from the user and storing in the array
for (let i = 0; i < size; i++) {
    let value = parseInt(readLineSync.question(`Enter element ${i + 1}: `));
    arr.push(value);

    // Checking if the element is even
    if (arr[i] % 2 === 0) {
        count++; // Increment count for even numbers
    }
}

// Display the result
console.log(`Number of even numbers in the given array is: ${count}`);
