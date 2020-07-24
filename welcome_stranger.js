function greetings(nameArr, title) {
  let name = '';
  for(let i = 0; i < nameArr.length; i++) {
    name += (nameArr[i])
    if (i < 2) {
      name += ' ';
    }
  }
  let occupation = (title["title"] + ' ' + title["occupation"]);

  return (`Hello, ${name}! Nice to have a ${occupation} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
