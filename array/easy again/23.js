// Numbers to Arrays and Vice Versa
// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.
// Examples
function toArray(num) {
  let convertIntoArr = String(num).split("");
  //     .map((item) => +item);
  let result = [];
  for (let i = 0; i < convertIntoArr.length; i++) {
    result.push(Number(convertIntoArr[i]));
  }
  return result;
}
function toNumber(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return Number(result);
  //   return +arr.join("");
}
console.log(toArray(235)); //➞ [2, 3, 5]
console.log(toArray(0)); //➞ [0]
console.log(toNumber([2, 3, 5])); //➞ 235
console.log(toNumber([0])); //➞ 0
// Notes
// All test cases will be weakly positive numbers: >= 0
