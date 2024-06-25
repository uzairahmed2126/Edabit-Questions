// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
function countTrue(arr) {
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === true) {
  //       count++;
  //     }
  //   }
  //   return count;
  return arr.reduce((acc, cur) => {
    if (cur === true) {
      return acc + cur;
    }
    return acc;
  }, 0);
}
console.log(countTrue([true, false, false, true, false])); //➞ 2

console.log(countTrue([false, false, false, false])); //➞ 0

console.log(countTrue([])); //➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
