function sequence(num) {
  let outcome = [];
  for (let i = 1; i <= num; i++) {
    outcome.push(i);
  }

  return outcome;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
