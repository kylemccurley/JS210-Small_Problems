function isPrime(num) {
  if ((num <= 1) || ((num > 2) && (num % 2 === 0))) {
    return false;
  }

  // Only divisible by 1 and itself
  for (let i = 3; i < num; i+= 2) {
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
