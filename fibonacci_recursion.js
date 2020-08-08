function fibonacci(num) {
  if (num === 1) {
    return 1;
  }

  let fib1 = 0;
  let fib2 = 1;
  let fib;
  for (let i = 1; i < num; i++) {
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }

  return fib;
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
