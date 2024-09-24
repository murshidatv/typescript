// Number of rows for the pattern
const rows: number = 5;

// Outer loop for each row
for (let i = 1; i <= rows; i++) {
    let line = ''; // Initialize an empty string for the current row

    // Inner loop for printing numbers
    for (let j = 1; j <= i; j++) {
        line += `${j} `; // Append the number followed by a space
    }

    console.log(line); // Print the line (trim to remove the trailing space)
}
