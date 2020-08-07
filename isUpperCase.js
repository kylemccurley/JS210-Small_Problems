function isUppercase(letter) {
  if (!letter) {
    return true;
  }

  const REGEX = /[a-z]|[A-Z]/g
  const TEST_DOWNCASE = /[a-z]/g;
  let strippedWord = letter.match(REGEX).join('');
  if ((TEST_DOWNCASE).test(strippedWord)) {
    return false;
  }

  return true;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
