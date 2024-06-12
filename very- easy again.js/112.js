// Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.
// Examples
function negate(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(-arr[i]);
  //   }
  //   return result;
  return arr.map((element) => -element);
}
console.log(negate([1, 2, 3, 4])); //➞ [-1, -2, -3, -4]
console.log(negate([-1, 2, -3, 4])); //➞ [1, -2, 3, -4]
console.log(negate([])); //➞ []
// Notes
// If you get an empty array, return an empty array: []
