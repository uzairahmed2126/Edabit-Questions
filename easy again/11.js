// Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples
function isAvgWhole(arr) {
  //   let total = arr.reduce((acc, cur) => acc + cur);
  //   return total % arr.length === 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result % arr.length === 0;
}
console.log(isAvgWhole([1, 3])); //➞ true

console.log(isAvgWhole([1, 2, 3, 4])); //➞ false

console.log(isAvgWhole([1, 5, 6])); //➞ true

console.log(isAvgWhole([1, 1, 1])); //➞ true

console.log(isAvgWhole([9, 2, 2, 5])); //➞ false
// Notes
// N/A
