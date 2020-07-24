function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    var long = str1;
    var short = str2;
  } else {
    var long = str2;
    var short = str1;
  }

  return (short + long + short)
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
