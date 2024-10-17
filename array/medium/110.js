// Are the Sum of Digits in the Numbers Equal?
// Write a function that takes an array of two numbers and determines if the sum of the digits in each number are equal to each other.

// Examples
// function isEqual(arr) {
//   let convertNumberIntoString = arr.map((item) =>
//     `${item}`.split("").map((char) => 1 * char)
//   );
//   let result = convertNumberIntoString.map((item, index) =>
//     item.reduce((acc, cur) => {
//       if (index === 0) {
//         acc += cur;
//       } else {
//         acc += cur;
//       }
//       return acc;
//     }, 0)
//   );
//   return result[0] === result[1];
// }
function isEqual(arr) {
  let mappedArr = arr.map((item) => `${item}`);
  let first = 0;
  let second = 0;
  for (let i = 0; i < mappedArr.length; i++) {
    let char = mappedArr[i];
    for (let j = 0; j < char.length; j++) {
      if (i === 0) {
        first += +char[j];
      } else {
        second += +char[j];
      }
    }
  }
  return first === second;
}
console.log(isEqual([105, 42])); //➞ true
// # 1 + 0 + 5 = 6
// # 4 + 2 = 6

console.log(isEqual([21, 35])); //➞ false

console.log(isEqual([0, 0])); //➞ true
// Notes
// N/A
