// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.

// Examples
function difference(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr[arr.length - 1] - arr[0];
  //   return Math.max(...arr) - Math.min(...arr);
}
console.log(difference([10, 15, 20, 2, 10, 6])); //➞ 18
// 20 - 2 = 18
console.log(difference([-3, 4, -9, -1, -2, 15])); //➞ 24
// 15 - (-9) = 24
console.log(difference([4, 17, 12, 2, 10, 2])); //➞ 15
// Notes
// N/A
