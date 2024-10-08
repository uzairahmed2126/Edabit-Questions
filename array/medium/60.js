// Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

// Examples
function miniPeaks(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
}
function miniPeaks(arr) {
  return arr.filter((item, index) => {
    if (item > arr[index - 1] && item > arr[index + 1]) {
      return item;
    }
  });
}
console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2])); //➞ [5, 9]
// 5 has neighbours 4 and 2, both are less than 5.
console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4])); //➞ [2, 3, 5]
console.log(miniPeaks([1, 2, 3, 4, 5, 6])); //➞ []
// Notes
// Do not count boundary numbers, since they only have one left/right neighbor.
// If no such numbers exist, return an empty array.
