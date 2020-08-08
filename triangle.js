function triangle(...args) {
  if (!isValid()) {
    return 'invalid';
  }

  if (rightCheck()) {
    return 'right';
  } else if (acuteCheck()) {
    return 'acute'
  } else if (obtuseCheck()) {
    return 'obtuse';
  }

  function acuteCheck() {
    for (let i = 0; i < args.length; i++) {
      if (args[i] >= 90) {
        return false;
      }
    }

    return true;
  }

  function rightCheck() {
    for (let i = 0; i < args.length; i++) {
      let el = args[i];
      if (el === 90) {
        return true;
      }
    }

    return false;
  }

  function obtuseCheck() {
    for (let i = 0; i < args.length; i++) {
      let el = args[i];
      if (el > 90) {
        return true;
      }
    }

    return false;
  }

  function isValid() {
    let checker = (side) => {
      return (side === 0);
    }

    let adder = (accumulator, value) => {
      return accumulator + value;
    }
  
    if (!(args.reduce(adder) === 180)) {
      return false;
    }

    if (args.some(checker)) {
      return false;
    }

    return true;
  
    function findSmallerSides(hypotenuse) {
      let smallSides = [];
      for (let idx = 0; idx < args.length; idx++) {
        let el = args[idx];
        if (el === hypotenuse) {
          continue;
        } else {
          smallSides.push(el);
        }
      }

      return smallSides;
    }

    function maxSide() {
      let max = args[0];
      for (let i = 0; i < args.length; i++) {
        let el = args[i];
        if (el > max) {
          max = el;
        }
      }

      return max;
    }
   }
  }

console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");
