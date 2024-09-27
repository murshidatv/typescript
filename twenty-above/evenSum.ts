//  function to check if a number is even or odd
const isEven = (num: number): boolean => num % 2 === 0;

//  function to filter and sum the array
const myFilter = (myArray: number[], callback: (num: number) => boolean): number => {
    // Reduce the array to find the sum
    return myArray.reduce((sum, currentNum) => {
        // Apply the callback function to each element
        return callback(currentNum) ? sum + currentNum : sum + currentNum; // Sum all elements
    }, 0); // Start with 0 as the initial sum
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const sum = myFilter(myArray, (num) => num % 2 === 0 || num % 2 !== 0); // Passing condition to include all numbers

console.log('Sum of array is:', sum); // Output: 15
