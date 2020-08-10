function centerOf(str) {
  let middleIdx = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[middleIdx - 1] + str[middleIdx];
  }

  return str[middleIdx];
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
