function findFibonacciIndexByLength(num) {
  let num1 = 0;
  let num2 = 1;
  let fib;
  let counter = 1;
  for (let i = 0; String(num2).length < num; i++) {
    fib = num1 + num2;
    num1 = num2;
    num2 = fib;
    counter++;
  }


  return counter;
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
