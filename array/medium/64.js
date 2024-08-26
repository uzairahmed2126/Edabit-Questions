// No Hidden Fees
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// Examples
// function hasHiddenFee(arr, val) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i].replace("$", ""));
//   }
//   return sum < val.replace("$", "");
// }
function hasHiddenFee(prices, supposed) {
  let total = prices.reduce((acc, cur) => {
    acc += Number(cur.replace("$", ""));
    return acc;
  }, 0);
  return total < supposed.slice(1, supposed.length);
}
console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15")); //➞ false
console.log(hasHiddenFee(["$1", "$2", "$3"], "$6")); //➞ false
console.log(hasHiddenFee(["$1"], "$4")); //➞ true
console.log(hasHiddenFee(["$3", "$2", "$1", "$3", "$0"], "$10")); //➞ true
// Notes
// Remember that each price is given as a string.
// All $ signs will be at the beginning of the number.
