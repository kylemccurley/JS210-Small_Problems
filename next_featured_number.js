function featured(num) {
  const LARGEST_FEATURED_NUMBER = 9876543201;
  
  num++; // Iterate the number up by 1, so the result is never the original number
  while (!(num % 7 === 0)) {
    num++
  }

  for (let featureCandidate = num; featureCandidate <= LARGEST_FEATURED_NUMBER; featureCandidate += 7) {
    if (validFeatured(featureCandidate)) {
      return featureCandidate;
    }
  }

  console.log("There is no possible number that fulfills those requirements.");
  return;

  function validFeatured(candidate) {
    // Odd Number?
    if (candidate % 2 === 0) {
      return false;
    }
    // Multiple of 7?
    if (!(candidate % 7 === 0)) {
      return false;
    }
    
    // Unique Digits?
    return uniqueDigits();
  
    function uniqueDigits() {
      let digits = [];
      let numStr = String(candidate);
      for (let idx = 0; idx < numStr.length; idx++) {
        let digit = numStr[idx];
        if (digits.includes(digit)) {
          return false;
        } else {
          digits.push(digit);
        }
      }

      return true; 
    }
  }
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
