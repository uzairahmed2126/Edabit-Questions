// Moving to the End
// Write a function that moves all elements of one type to the end of the array.

// Examples
function moveToEnd(arr, val) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== val) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === val) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
}
function moveToEnd(arr, val) {
  let a = arr.filter((item) => {
    if (item !== val) {
      return item;
    }
  });
  let length = arr.length - a.length;
  for (let i = 0; i < length; i++) {
    a.push(val);
  }
  return a;
}
console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1)); //➞ [3, 2, 4, 4, 1, 1]
// Move all the 1s to the end of the array.
console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)); //➞ [7, 8, 1, 2, 3, 4, 9]
console.log(moveToEnd(["a", "a", "a", "b"], "a")); //➞ ["b", "a", "a", "a"]
// Notes
// Keep the order of the un-moved items the same.
