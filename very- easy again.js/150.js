// Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

// Examples
function same(arr1, arr2) {
  function countUnique(arr) {
    let uniqueElement = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueElement.indexOf(arr[i]) === -1) {
        uniqueElement.push(arr[i]);
      }
    }
    return uniqueElement.length;
  }
  let uniqueFirst = countUnique(arr1);
  let uniqueSecond = countUnique(arr2);
  return uniqueFirst === uniqueSecond;
  //   function uniqueArray(arr) {
  //     return new Set(arr).size;
  //   }
  //   let first = uniqueArray(arr1);
  //   let second = uniqueArray(arr2);
  //   return first === second;
}
console.log(same([1, 3, 4, 4, 4], [2, 5, 7])); //➞ true

console.log(same([9, 8, 7, 6], [4, 4, 3, 1])); //➞ false

console.log(same([2], [3, 3, 3, 3, 3])); //➞ true
// Notes
// N/A
