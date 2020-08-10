function logInBox(str) {
  let boxLength = str.length;
  console.log(boxTopBottom(boxLength));
  console.log(createSpace(boxLength));
  console.log(createBanner(str));
  console.log(createSpace(boxLength));
  console.log(boxTopBottom(boxLength));

  function createBanner(str) {
    return '| ' + str + ' |';
  }

  function boxTopBottom(length) {
    let dashes = '';
    for (let i = 0; i < length; i++) {
      dashes += '-';
    }

    return '+-' + dashes + '-+';
  }
  
  function createSpace(length) {
    let spaces = '';
    for (let i = 0; i < length; i++) {
      spaces += ' ';
    }

    return '| ' + spaces + ' |';
  }
}

logInBox('To boldly go where no one has gone before.');
