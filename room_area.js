const readline = require('readline-sync');
const SQUARE_FEET_CONVERSION = 10.7639;
function roomArea() {
  console.log('Enter the length of the room in meters:');
  let length = readline.prompt();
  console.log('Enter the width of the room in meters:');
  let width = readline.prompt(); 
  console.log('Would you like the area computed in:');
  console.log('(f) > Feet');  
  console.log('(m) > Meters');
  console.log('Please select a single letter and select enter');
  let conversion = readline.prompt();

  if(conversion.toLowerCase() == 'f') {
    let areaFeet = Math.round((length * width) * SQUARE_FEET_CONVERSION).toFixed(2);
    console.log(`The area of the room is ${areaFeet} square feet`);
    return
  } else if (conversion.toLowerCase() == 'm') {
    let area = Math.round(length * width).toFixed(2);
    console.log(`The area of the room is ${area} square meters.`)
    return
  } else {
    console.log('Sorry, that is an invalid input.')
    roomArea();
  }
}

roomArea();
