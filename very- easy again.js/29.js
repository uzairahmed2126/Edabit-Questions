// Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
function drop(arr, end) {
    return arr.slice(end);
  //   return arr.splice(end);
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > end) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
}
console.log(drop([1, 2, 3], 1)); //➞ [2, 3]
console.log(drop([1, 2, 3], 2)); //➞ [3]
console.log(drop([1, 2, 3], 5)); //➞ []
console.log(drop([1, 2, 3], 0)); //➞ [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.
