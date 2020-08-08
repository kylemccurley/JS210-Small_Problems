function swapCase(str) {
  let swappedCase = [];
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let swappedWord = '';
    for (let i = 0; i < word.length; i++) {
      if (isUpperCase(word[i])) {
        swappedWord += word[i].toLowerCase();
      } else if (isLowerCase(word[i])) {
        swappedWord += word[i].toUpperCase();
      }
    }
    
    swappedCase.push(swappedWord)
  }

  console.log(swappedCase.join(' '));
  return swappedCase.join(' ');

  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  function isLowerCase(char) {
    return char === char.toLowerCase();
  }
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
