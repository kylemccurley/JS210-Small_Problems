function crunch(string) {
  let crunchedChars = '';
  let uniqueChar = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== uniqueChar) {
      crunchedChars += uniqueChar;
      uniqueChar = char;
    }

    if (i === string.length - 1) {
      crunchedChars += char;
    }
  }

  return crunchedChars;
}

crunch('ddaaiillyy ddoouubbllee') === "daily double";
crunch('4444abcabccba') === "4abcabcba";
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
