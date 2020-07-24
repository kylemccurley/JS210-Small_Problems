function xor(arg1, arg2) {
  let iterator = 0;
  (!!arg1) ? iterator++ : iterator--;
  (!!arg2) ? iterator++ : iterator--;

  return iterator == 0;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
