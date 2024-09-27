var number = 1; // Starting number for the pattern
// Outer loop for rows
for (var i = 1; i <= 4; i++) {
    // Inner loop for columns
    var line = ''; // Initialize an empty string for the current row
    // Inner loop for printing numbers
    for (var j = 1; j <= i; j++) {
        line += "".concat(number, " ");
        number++; // Increment the number for the next position
    }
    console.log(line); // Move to the next line after each row
}
