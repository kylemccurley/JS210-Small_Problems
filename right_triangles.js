function triangle(size) {
  for(let starNum = 1; starNum <= size; starNum++) {
    let outcome = '';
    let spaceCount = size - starNum;

    outcome += (' ').repeat(size - starNum);
    outcome += ('*').repeat(starNum) ;

    console.log(outcome);
  }
}

console.log(triangle(5));
/*
    *
   **
  ***
 ****
*****
*/

console.log(triangle(9));
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/
