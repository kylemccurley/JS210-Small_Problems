function rotateRightmostDigits(num, count) { 
  let numStr = String(num);
  let rotateNum = numStr.slice(numStr.length - count);
  let baseNum = numStr.slice(0, numStr.length - count);
  return (baseNum + rotate(rotateNum));

  function rotate(num) {
    let numStr = String(num);
    return numStr.slice(1) + numStr[0];
  }
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
