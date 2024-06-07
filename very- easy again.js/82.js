// Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
function arrayLessThan100(arr) {
  //   return arr.reduce((acc, cur) => acc + cur) < 100;
  let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     count += arr[i];
  //   }
  arr.forEach((element) => (count += element));
  return count < 100;
}
console.log(arrayLessThan100([5, 57])); //➞ true
console.log(arrayLessThan100([77, 30])); //➞ false
console.log(arrayLessThan100([0])); //➞ true
// Notes
// N/A
