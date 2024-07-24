// Trimmed Averages
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// Examples
function trimmedAverages(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  sortedArr.shift();
  sortedArr.pop();
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] / arr.length;
  }
  return result;
}
console.log(trimmedAverages([4, 5, 7, 100])); //➞ 6
// Average of 5 and 7
console.log(trimmedAverages([10, 25, 5, 15, 20])); //➞ 15
// Average of 10, 15 and 20
console.log(trimmedAverages([1, 1, 1])); //➞ 1
// 1
// Notes
// Round to the nearest whole number.
// Array size is greater than 2.
