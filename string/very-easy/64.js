// Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples
function lastItem(value) {
  //   return value[value.length - 1];
  // return value.at(-1)
  let lastVal;
  for (let i = 0; i < value.length; i++) {
    lastVal = value[i];
  }
  return lastVal;
}
console.log(lastItem([0, 4, 19, 34, 50, -9, 2])); //➞ 2
console.log(lastItem("The quick brown fox jumped over the lazy dog")); //➞ "g"
console.log(lastItem([])); //➞ undefined
// Notes
// Arrays/strings will be of varying size.
// Return undefined if array/string is empty.
