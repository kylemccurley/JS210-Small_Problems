function sumSquareDifference(num) {
  let sumSquares = 0;
  for (let i = 1; i <= num; i++) {
    sumSquares += i;
  }

  let squareSums = 0;
  for (let i = 1; i <= num; i++) {
    squareSums += Math.pow(i, 2);
  }

  return (sumSquares**2) - squareSums;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
