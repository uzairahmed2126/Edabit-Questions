// Slightly Superior
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

// Examples
function isFirstSuperior(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > array2[i]) {
      return true;
    }
  }
  return false;
}
isFirstSuperior([1, 2, 4], [1, 2, 3]); //➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); //➞ true

console.log(
  isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
); //➞ true

console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); //➞ false

console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); //➞ false
// Notes
// Both arrays will be the same length.
// All values and their counterparts will always be of the same data type.
// If the two arrays are the same, return false.
