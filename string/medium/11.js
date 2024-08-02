// Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples
function multiplyNums(str) {
  let arr = str.split(",");
  return arr.reduce((acc, cur) => {
    acc *= cur;
    return acc;
  }, 1);
  // let result  = 1;
  // for (let i = 0; i < arr.length; i++) {
  //   result *= arr[i];
  // }
  // return result;
}
console.log(multiplyNums("2, 3")); //➞ 6

console.log(multiplyNums("1, 2, 3, 4")); //➞ 24

console.log(multiplyNums("54, 75, 453, 0")); //➞ 0

console.log(multiplyNums("10, -2")); //➞ -20
// Notes
// Bonus: Try to complete this challenge in one line!
