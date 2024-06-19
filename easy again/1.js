// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
function minMax(arr) {
  // return [Math.min(...arr), Math.max(...arr)];
  // arr.sort((a, b) => a - b);
  // return [arr[0], arr[arr.length - 1]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return [arr[0], arr[arr.length - 1]];
}
console.log(minMax([1, 2, 3, 4, 5])); //➞ [1, 5]
console.log(minMax([2334454, 5])); //➞ [5, 2334454]
console.log(minMax([1])); //➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
