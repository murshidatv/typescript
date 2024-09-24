import * as readLineSync from 'readline-sync';

let str :string =readLineSync.question('enter a string :');
let reversed : string ;
reversed = str.split('').reverse().join('');
if(str === reversed){
    console.log('is Palindrome');
}else{
    console.log("is not palindrome");
}