import * as readLineSync from 'readline-sync';

let arr: number[] = [];
let size: number = parseInt(readLineSync.question('Enter the size of an array: '));

// Accept values for the array from the user
for (let i = 0; i < size; i++) {
    let value = parseInt(readLineSync.question(`Enter element ${i + 1}: `));
    arr.push(value);
}

// Sort the array in descending order
//arr.sort((a, b) => b - a);
// Sort the array in descending order using a temporary variable
for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) { // Swap if the current element is smaller than the next
            let temp = arr[j]; // Use a temporary variable to swap
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}


// Display the sorted array
console.log('Sorted array in descending order:');
console.log(arr.join(', '));
