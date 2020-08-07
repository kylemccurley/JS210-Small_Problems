function removeVowels(arr) {
  const VOWELS_REMOVED_REGEX = (/[^aeiouAEIOU]/g);

  let vowelWords = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let strippedVowels = word.match(VOWELS_REMOVED_REGEX);
    if (!strippedVowels) {
      vowelWords.push('');
    } else {
      vowelWords.push(strippedVowels.join(''));
    }
  }

  return vowelWords;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
