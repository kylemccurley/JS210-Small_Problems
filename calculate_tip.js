const readline = require('readline-sync');

let bill = Number(readline.question('What is the bill? '));
let percentage = Number(readline.question('What is the tip percentage? '));
let tip = ((bill / 100) * percentage).toFixed(2);
let total = (Number(bill) + Number(tip)).toFixed(2);

console.log(`The tip is $${tip}.`);
console.log(`The total is $${total}.`);
