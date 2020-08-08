function wordToDigit(str) {
  const WORD_TO_DIGIT = {
    zero: 0,
    one: 1, 
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  let words = str.split(' ');
  let translatedWords = [];
  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    let word = words[wordIdx];
    if (Object.keys(WORD_TO_DIGIT).includes(word)) {
      let stripped = word.match(/\w/g).join('');
      word.replace(stripped, WORD_TO_DIGIT[stripped]);
      translatedWords.push(word);
    } else {
      translatedWords.push(word);
    }
  }

  return translatedWords.join(' ');
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
