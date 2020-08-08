function staggeredCase(str) {
  let staggeredString = '';
  for (let idx = 0; idx <  str.length; idx++) {
    let character = str[idx];
      if (idx % 2 === 0) {
        staggeredString += character.toUpperCase();
      } else if (idx % 2 >= 1) {
        staggeredString += character.toLowerCase();
      } else {
        staggeredString += character;
      }
    }

  return staggeredString;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"
