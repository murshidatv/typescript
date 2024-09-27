import * as readlineSync from 'readline-sync';

// Accept the size of the array
let size: number = parseInt(readlineSync.question('Enter the array limit: '));

// Declare the arrays
let arr: number[] = [];
let resultArr: number[] = [];

// Accept values for the array
console.log('Enter the values of array:');
for (let i = 0; i < size; i++) {
    let value: number = parseInt(readlineSync.question(`Enter element ${i + 1}: `));
    arr.push(value);
}

// Multiply adjacent values and store them in the result array
for (let i = 0; i < size - 1; i++) {
    resultArr.push(arr[i] * arr[i + 1]);
}

// Display the result array
console.log('Output:');
console.log(resultArr.join('\t'));
