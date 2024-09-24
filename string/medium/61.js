// Joining Digits Together
// Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".

// Examples
// function joinDigits(num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result.split("").join("-");
// }
function joinDigits(num) {
  let result = "";
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += i;
  }
  for (let i = 0; i < str.length; i++) {
    result += str[i] + "-";
  }
  return result.slice(0, result.length - 1);
}
console.log(joinDigits(4)); //➞ "1-2-3-4"
console.log(joinDigits(11)); //➞ "1-2-3-4-5-6-7-8-9-1-0-1-1"
console.log(joinDigits(15)); //➞ "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"
// Notes
// Remember to start at 1 and include n as the last number.
