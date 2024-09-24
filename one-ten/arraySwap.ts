import * as readlineSync from 'readline-sync';

// Accept the size of the arrays
const size: number = parseInt(readlineSync.question('Enter the size of arrays: '));

// Accept values for Array 1
let array1: number[] = readlineSync.question('Enter the values of Array 1 (comma-separated): ')
    .split(',').map(Number);

// Accept values for Array 2
let array2: number[] = readlineSync.question('Enter the values of Array 2 (comma-separated): ')
    .split(',').map(Number);

// Swap the arrays
[array1, array2] = [array2, array1];

// Display the swapped arrays
console.log('Arrays after swapping:');
console.log('Array1:', array1.join(', '));
console.log('Array2:', array2.join(', '));
