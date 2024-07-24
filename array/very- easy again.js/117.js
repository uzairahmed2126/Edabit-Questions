// Remove Null from an Array
// Create a function to remove all null values from an array.

// Examples
function removeNull(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== null) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  return arr.filter((element) => element !== null);
}
console.log(removeNull(["a", null, "b", null])); //➞ ["a", "b"]
console.log(removeNull([null, null, null, null, null])); //➞ []
console.log(removeNull([7, 8, null, 9])); //➞ [7, 8, 9]
// Notes
// N/A
