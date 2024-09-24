
import  * as readlineSync from 'readline-sync';

let limit :number = parseInt(readlineSync.question('Enter the limit:'));
let sum = 0;

for (let i = 1; i < limit; i += 2) {
    sum += i;
}

// Display the result
console.log(`Sum of odd numbers = ${sum}`);