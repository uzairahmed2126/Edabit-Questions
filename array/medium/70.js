// Simon Says
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

// Examples
function simonSays(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr2[i + 1] !== arr1[i]) {
      result = false;
    }
  }
  return result;
  //   return arr1.slice(0, -1).every((value, index) => value === arr2[index + 1]);
}
console.log(simonSays([1, 2], [5, 1])); //➞ true
console.log(simonSays([1, 2], [5, 5])); //➞ false
console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])); //➞ true
console.log(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3])); //➞ false
console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 3, 4, 5])); //➞ false
// Notes
// Both input arrays will be of the same length, and will have a minimum length of 2.
// The values of the 0-indexed element in the second list and the n-1th indexed element in the first list do not matter.
