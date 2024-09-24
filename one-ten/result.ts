import * as readLineSync from 'readline-sync';

let mark :number = parseFloat(readLineSync.question('Enter your mark:'));

if ( mark >= 50 )
{
    console.log("Passed");
}else{
    console.log("failed");
}

