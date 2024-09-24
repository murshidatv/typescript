import * as readlineSync from 'readline-sync';

// Accept input number from the user
let dayNumber: number = parseInt(readlineSync.question('Enter a number from 1 to 7 : '));

// Use switch case to map numbers to days
switch (dayNumber) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid Entry');
}
