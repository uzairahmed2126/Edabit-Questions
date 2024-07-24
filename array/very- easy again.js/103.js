// Product Divisible by Sum?
// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// Examples
function divisible(arr) {
  //   let sum = arr.reduce((acc, cur) => acc * cur);
  //   let total = arr.reduce((acc, cur) => acc + cur);
  // return sum % total === 0;

  let totalOfNumber = 0;
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    totalOfNumber += arr[i];
    sum *= arr[i];
  }
  return sum % totalOfNumber == 0;
}
// console.log(48 % 12 === 0);
console.log(divisible([3, 2, 4, 2])); //➞ false
console.log(divisible([4, 2, 6])); //➞ true
// 4 * 2 * 6 / (4 + 2 + 6)
console.log(divisible([3, 5, 1])); //➞ false
// Notes
// N/A
