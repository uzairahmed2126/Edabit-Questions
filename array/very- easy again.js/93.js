// Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
function deNest(arr) {
  while (Array.isArray(arr)) {
    arr = arr[0];
  }
  return arr;
}
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])); //➞ 3
console.log(deNest([[[[[[[true]]]]]]])); //➞ true
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])); //➞ "edabit"
// Notes
// You only need to retrieve one element.
