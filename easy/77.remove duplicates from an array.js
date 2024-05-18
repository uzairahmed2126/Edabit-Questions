// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
function removeDups(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) === -1) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(removeDups([1, 0, 1, 0])); //➞ [1, 0]
console.log(removeDups(["The", "big", "cat"])); //➞ ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); //➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.
