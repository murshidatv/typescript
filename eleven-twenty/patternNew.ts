
    let number: number = 1; // Starting number for the pattern

    // Outer loop for rows
    for (let i = 1; i <= 4; i++) {
        
        let line = ''; // Initialize an empty string for the current row

        // Inner loop for printing numbers
        for (let j = 1; j <= i; j++) {
          
            line += `${number} `; 
          
            number++; // Increment the number for the next position
        }
        console.log(line); // Move to the next line after each row
    }



