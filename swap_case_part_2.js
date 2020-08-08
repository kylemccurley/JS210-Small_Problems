function staggeredCase(str) {
  let alphIdx = 0;
  let swappedStr = '';
  for (let idx = 0; idx < str.length; idx++) {
    let character = str[idx];
    if (alphIdx % 2 === 0 ) {
      swappedStr += character.toUpperCase();
    } else if (alphIdx % 2 >= 0) {
      swappedStr += character.toLowerCase();
    } else {
      swappedStr += character;
    }

    if (/[a-zA-Z]/g.test(character)) {
      alphIdx++;
    }
  }

  return swappedStr;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
