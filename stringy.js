function stringy(iterator) {
  let binary = '1';
  let outcome = '';
  for (let i = 0; i < iterator; i++) {
    outcome += binary;
    if (binary === '1') {
      binary = '0';
    } else {
      binary = '1';
    }
  }

  return outcome;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
