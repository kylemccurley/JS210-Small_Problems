/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
*/

const readline = require('readline-sync');

function computeValue() {
  let outcome = 1;
  let number = readline.question('Please enter an integer greater  than 0: ');
  let computation = readline.question("Enter \"s\" to compute the sum, or \"p\" to compute the product: ");

  for(let i = 1; i <= number; i++) {
    if(computation == 's') {
      outcome += i;
    } else {
      outcome *= i;
    }
  }

  console.log(outcome);
}

computeValue();
