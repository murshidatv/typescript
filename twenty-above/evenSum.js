// Arrow function to check if a number is even or odd
var isEven = function (num) { return num % 2 === 0; };
// Arrow function to filter and sum the array
var myFilter = function (myArray, callback) {
    // Reduce the array to find the sum
    return myArray.reduce(function (sum, currentNum) {
        // Apply the callback function to each element
        return callback(currentNum) ? sum + currentNum : sum + currentNum; // Sum all elements
    }, 0); // Start with 0 as the initial sum
};
// Example usage
var myArray = [1, 2, 3, 4, 5];
var sum = myFilter(myArray, function (num) { return num % 2 === 0 || num % 2 !== 0; }); // Passing condition to include all numbers
console.log('Sum of array is:', sum); // Output: 15
