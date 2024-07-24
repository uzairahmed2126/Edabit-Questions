// Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examples
function tuckIn(arr1, arr2) {
  let result = [];
  result.push(arr1[0]);
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  result.push(arr1[1]);
  return result;
  //   return [arr1[0], ...arr2, arr1[arr1.length - 1]];
  //   const uniqeArray = arr2.filter((item) => !arr1.includes(item));
  //   return arr1.slice(0, 1).concat(uniqeArray, arr1.slice(1));
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); //➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15, 150], [45, 75, 35])); //➞ [15, 45, 75, 35, 150]
console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
); //➞ [[1, 2], [3, 4], [5, 6]]
// Notes
// The first array always has two elements.
// Use the spread syntax to solve this challenge.
