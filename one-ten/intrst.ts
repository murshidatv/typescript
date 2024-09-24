import * as readLineSync from 'readline-sync';

let P :number = parseFloat(readLineSync.question('Enter principal amount:'));
let n :number = parseFloat(readLineSync.question('Enter number of years:'));
let R :number = parseFloat(readLineSync.question('Enter rate of interest:'));

let SI : number = n*P*R/100;
console.log("Simple interst is:",SI);
