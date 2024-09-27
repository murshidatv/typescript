function reverseString(my_string) {
    try {
        // Try to reverse the string
        var reversedString = String(my_string).split('').reverse().join('');
        console.log("Reversed string is : ".concat(reversedString));
    }
    catch (err) {
        // Catch any error if string reversal fails
        console.log("Error : ".concat(err.message));
    }
    finally {
        // Print the type of my_string variable
        console.log("Type of my_string is : ".concat(typeof my_string));
    }
}
// Sample Input 0
reverseString("1234");
// Sample Input 1
reverseString(1234); // Use just 1234 instead of Number(1234) since it's already a number
