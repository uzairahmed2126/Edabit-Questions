// Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Examples
function valueAt(arr, index) {
  let indexof = Math.floor(index);
  return arr[indexof];
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)); //➞ 6
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)); //➞ 5
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); //➞ 4
// Notes
// Math.floor() can be helpful.
