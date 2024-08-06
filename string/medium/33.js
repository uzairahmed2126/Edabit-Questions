// Harshad Number
// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

// Examples
// function isHarshad(number) {
//   let num = number.toString().split("");
//   let res = num.reduce((acc, cur) => {
//     let total = acc + parseInt(cur);
//     return total;
//   }, 0);
//   return number % res === 0;
// }
function isHarshad(number) {
  let num = String(number).split("");
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += +num[i];
  }
  return number % total == 0;
}
console.log(isHarshad(75)); //➞ false
// 7 + 5 = 12
// 75 is not exactly divisible by 12
console.log(isHarshad(171)); //➞ true
// 1 + 7 + 1 = 9
// 9 exactly divides 171
console.log(isHarshad(481)); //➞ true
console.log(isHarshad(89)); //➞ false
console.log(isHarshad(516)); //➞ true
console.log(isHarshad(200)); //➞ true
// Notes
// A recursive version of this challenge can be found here.
