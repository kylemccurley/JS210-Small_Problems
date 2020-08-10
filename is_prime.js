function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  }

  // Only divisible by 1 and itself
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
