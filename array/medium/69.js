// Stand in Line
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

// Examples
// function nextInLine(arr, val) {
//   let result = [];
//   if (arr.length > 0) {
//     for (let i = 1; i < arr.length; i++) {
//       result.push(arr[i]);
//     }
//     result.push(val);
//   } else {
//     return "No array has been selected";
//   }
//   return result;
// }
function nextInLine(arr, val) {
  //   let changeFirstItem = arr[0];
  //   let result = [];
  //   result.push(val);
  if (arr.length > 0) {
    return arr
      .reduce((acc, cur, index) => {
        if (index === 0) {
        } else {
          acc.push(cur);
        }
        return acc;
      }, [])
      .concat(val);
  }
  return "No array has been selected";
}
console.log(nextInLine([5, 6, 7, 8, 9], 1)); //➞ [6, 7, 8, 9, 1]
console.log(nextInLine([7, 6, 3, 23, 17], 10)); //➞ [6, 3, 23, 17, 10]
console.log(nextInLine([1, 10, 20, 42], 6)); //➞ [10, 20, 42, 6]
console.log(nextInLine([], 6)); //➞ "No array has been selected"
// Notes
// For an empty array input, return: "No array has been selected"
