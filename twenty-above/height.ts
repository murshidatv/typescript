function checkHeight(my_height: any): void {
    try {
        // Check if the height is not a number
        if (isNaN(my_height)) {
            throw new Error("not A Number Error");
        }

        // Check if the height is greater than 75 (Huge Height)
        if (my_height > 75) {
            throw new Error("huge Height Error");
        }

        // Check if the height is less than 1 (Tiny Height)
        if (my_height < 1) {
            throw new Error("tiny Height Error");
        }

        // If the height is valid, print the height
        console.log(my_height);
    } catch (err) {
        // Print the error message
        console.log(err.message);
    }
}

// Sample Input 0
checkHeight("seven");  // Output: not A Number Error

// Sample Input 1
checkHeight(77);       // Output: huge Height Error

// Sample Input 2
checkHeight(0);        // Output: tiny Height Error

// Sample Input 3
checkHeight(8);        // Output: 8
