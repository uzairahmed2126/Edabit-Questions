// Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples
function dropRight(arr, val = 1) {
  // let result = [];
  // for (let i = 0; i < arr.length-val; i++) {
  //   result.push(arr[i]);
  // }
  // return result;
  let newLength = arr.length - val;
  if (newLength < 0) return [];
  return arr.slice(0, newLength);
}
console.log(dropRight([1, 2, 3])); //➞ [1, 2]
console.log(dropRight([1, 2, 3], 2)); //➞ [1]
console.log(dropRight([1, 2, 3], 5)); //➞ []
console.log(dropRight([1, 2, 3], 0)); //➞ [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.
