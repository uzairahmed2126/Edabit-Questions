// Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

// Examples
function isSubset(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }
  return true;
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); //➞ true
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); //➞ true
console.log(isSubset([1, 2], [3, 5, 9, 1])); //➞ false
// Notes
// Both arrays will contain only unique values.
