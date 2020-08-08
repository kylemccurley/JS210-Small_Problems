function wordCap(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let translatedWord = word[0].toUpperCase();
    translatedWord += word.slice(1, word.length);
    words[i] = translatedWord;
  }

  console.log(words.join(' '));
  return words.join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
