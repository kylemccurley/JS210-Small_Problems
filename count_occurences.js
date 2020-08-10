function countOccurrences(vehicles) {
  let occurencesCount = {};
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    if (occurencesCount[vehicle]) {
      occurencesCount[vehicle]++;
    } else {
      occurencesCount[vehicle] = 1;
    }
  }

  for (vehicle in occurencesCount) {
    console.log(vehicle + ' => ' + occurencesCount[vehicle]);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
