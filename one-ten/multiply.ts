
import  * as readlineSync from 'readline-sync';

let num :number = parseInt(readlineSync.question('Enter a number:'));

for(let i = 1;i<=10;i++){
    console.log(`${i} x ${num} = ${i*num}`);
}