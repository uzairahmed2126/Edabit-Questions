// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// Examples
function countdown(number) {
  //   let result = [];
  //   for (let i = number; i >= 0; i--) {
  //     result.push(i);
  //   }
  //   return result;
  let result = [];
  while (number >= 0) {
    result.push(number);
    number--;
  }
  return result;
}
console.log(countdown(5)); //➞ [5, 4, 3, 2, 1, 0]
console.log(countdown(1)); //➞ [1, 0]
console.log(countdown(0)); //➞ [0]
// Notes
// The argument will always be greater than or equal to zero.
