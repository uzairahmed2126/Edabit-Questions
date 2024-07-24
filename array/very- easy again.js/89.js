// Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// Examples
function moveZeros(arr) {
  let zeroCounts = 0;
  //   let filterdArr = arr.filter((element) => {
  //     if (element !== 0) {
  //       return element;
  //     } else {
  //       zeroCounts++;
  //     }
  //   });
  // let nonZeroElements = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== 0) {
  //       nonZeroElements.push(arr[i]);
  //     } else {
  //       zeroCounts++;
  //     }
  //   }
  //   for (let i = 0; i < zeroCounts; i++) {
  //     filterdArr.push(0);
  //   }
  //   return filterdArr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr[zeroCounts] = arr[i];
        zeroCounts++;
    }
  }
  for (let i = zeroCounts; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3])); //➞ [1, 1, 2, 1, 3, 0, 0]
console.log(moveZeros([0, 1, null, 2, false, 1, 0])); //➞ [1, null, 2, false, 1, 0, 0]
console.log(
  moveZeros([
    "a",
    0,
    0,
    "b",
    "c",
    "d",
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    1,
    9,
    0,
    0,
    0,
    0,
    9,
  ])
); //➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Notes
// N/A
