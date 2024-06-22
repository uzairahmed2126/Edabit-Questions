// Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
// Examples
function sortNumsAscending(arr) {
  if (arr === null) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
  //   return arr.sort((a, b) => a - b);
}
console.log(sortNumsAscending([1, 2, 10, 50, 5])); //➞ [1, 2, 5, 10, 50]

console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); //➞ [-95, -24, 4, 29, 80, 85]

console.log(sortNumsAscending(null)); //➞ []

console.log(sortNumsAscending([])); //➞ []
// Notes
// Test input can be positive or negative.
