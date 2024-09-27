import * as readLineSync from 'readline-sync';


let isPrime =true;
 let num: number = parseInt(readLineSync.question('Enter a number: '));
    if (num <= 1) {
        isPrime = false;
    }
else{
    // Check divisibility from 2 to square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
    }
}

    // Check if the number is prime and display the result
    if (isPrime) {
        console.log('Entered number is a Prime number.');
    } else {
        console.log('Entered number is not a Prime number.');
    }


