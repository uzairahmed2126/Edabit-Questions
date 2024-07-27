// Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

// Examples
function sumTwoSmallestNums(arr) {
  //   let [num1, num2] = arr.sort((a, b) => a - b);
  //   return num1 + num2;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr[0] + arr[1];
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); //➞ 7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); //➞ 3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1])); //➞ 8
console.log(
  sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
); //➞ 563
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); //➞ 4519
// Notes
// Don't count negative numbers.
// Floats and empty arrays will not be used in any of the test cases.
