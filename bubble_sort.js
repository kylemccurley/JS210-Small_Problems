function bubbleSort(arr) {
 let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      let el1 = arr[i];
      let el2 = arr[i + 1];
      if (el1 > el2) {
        arr[i] = el2;
        arr[i + 1] = el1;
        swapped = true;
      }
    }
  }
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
