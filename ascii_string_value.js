function asciiValue(str) {
  let outcome = 0;

  for(let i = 0; i < str.length; i++) {
    outcome += str.charCodeAt(i);
  }

  return outcome;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
