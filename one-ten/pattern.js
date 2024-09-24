// Number of rows for the pattern
var rows = 5;
// Outer loop for each row
for (var i = 1; i <= rows; i++) {
    var line = ''; // Initialize an empty string for the current row
    // Inner loop for printing numbers
    for (var j = 1; j <= i; j++) {
        line += "".concat(j, " "); // Append the number followed by a space
    }
    console.log(line.trim()); // Print the line (trim to remove the trailing space)
}
