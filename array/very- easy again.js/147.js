// Retrieve the Last N Elements
// Write a function that retrieves the last n elements from an array.

// Examples
function last(arr, n) {
  //   if (arr.length === 0) {
  //     return [];
  //   } else if (n > arr.length) {
  //     return "Invalid";
  //   } else {
  //     return arr.slice(-n);
  //   }
  //   if (n === 0) {
  //     return [];
  //   } else if (n > arr.length) {
  //     return "invalid";
  //   } else {
  //     return arr.slice(-n);
  //   }
  if (n > arr.length) {
    return "invalid";
  }
  let result = [];
  for (let i = arr.length - n; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
console.log(last([1, 2, 3, 4, 5], 1)); //➞ [5]
console.log(last([4, 3, 9, 9, 7, 6], 3)); //➞ [9, 7, 6]
console.log(last([1, 2, 3, 4, 5], 7)); //➞ "invalid"
console.log(last([1, 2, 3, 4, 5], 0)); //➞ []
// Notes
// Return "invalid" if n exceeds the length of the array.
// Return an empty array if n == 0.
