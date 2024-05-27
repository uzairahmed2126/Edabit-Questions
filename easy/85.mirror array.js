// Mirror Array
// Given an integer array, transform that array into a mirror.

// Examples
function mirror(arr) {
  let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   result.push(arr[i]);
  // }
  // result.pop();
  // let reverseArray = arr.reverse();
  // result.push(reverseArray);
  // return result.flat();
  // for (let i = 0; i < arr.length; i++) {
  //   result.push(arr[i]);
  // }
  // result.pop();
  // result.push(arr.reverse());
  // return result.flat();
  let reversedPart = arr.slice().reverse();
  reversedPart.shift();
  return arr.concat(reversedPart);
}
console.log(mirror([0, 2, 4, 6])); //➞ [0, 2, 4, 6, 4, 2, 0]
console.log(mirror([1, 2, 3, 4, 5])); //➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mirror([3, 5, 6, 7, 8])); //➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
// Notes
// Do not repeat the last item of the given array.
