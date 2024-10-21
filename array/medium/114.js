// Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

// Examples
function cumulativeSum(arr) {
  let result = [arr[0]];
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i - 1];
    result.push(sum + arr[i]);
  }
  return result;
}
console.log(cumulativeSum([1, 2, 3])); //➞ [1, 3, 6]
console.log(cumulativeSum([1, -2, 3])); //➞ [1, -1, 2]
console.log(cumulativeSum([3, 3, -2, 408, 3, 3])); //➞ [3, 6, 4, 412, 415, 418]
// Notes
// Return an empty array if the input is an empty array.
