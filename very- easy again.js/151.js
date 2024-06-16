// Recursion: Array Sum
// Write a function that finds the sum of an array. Make your function recursive.

// Examples
function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}
console.log(sum([1, 2, 3, 4])); //➞ 10
console.log(sum([1, 2])); //➞ 3
console.log(sum([1])); //➞ 1
console.log(sum([])); //➞ 0
// Notes
// Return 0 for an empty array.
// Check the Resources tab for info on recursion.
