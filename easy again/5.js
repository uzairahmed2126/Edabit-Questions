// Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
function numberSplit(number) {
  let result = [];
  for (let i = 0; i < 2; i++) {
    if (parseFloat(number / 2).toFixed(1)) {
      result.push(Math.floor(number / 2));
    } else {
      result.push(Math.ceil(number / 2));
    }
  }
  return result;
  //   return [Math.floor(number / 2), Math.ceil(number / 2)];
}
console.log(numberSplit(4)); //➞ [2, 2]

console.log(numberSplit(10)); //➞ [5, 5]

console.log(numberSplit(11)); //➞ [5, 6]

console.log(numberSplit(-9)); //➞ [-5, -4]
// Notes
// All numbers will be integers.
// You can expect negative numbers too.
