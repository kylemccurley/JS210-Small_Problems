function letterCaseCount(str) {
  if (!str) {
    return { lowercase: 0, uppercase: 0, neither: 0 };
  }
  LOWERCASE_REGEX = /[a-z]/g;
  UPPERCASE_REGEX = /[A-Z]/g;
  let lowercaseCount = str.match(LOWERCASE_REGEX);
  let uppercaseCount = str.match(UPPERCASE_REGEX);
  

  let neitherCount = str.length - (lowercaseCount + uppercaseCount);
  return {  lowercase: lowercaseCount, uppercaseCount: uppercaseCount, neither: neitherCount };
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
//letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
//letterCaseCount('');          // { lowercase: 0, uppercase: 0, neither: 0 }
