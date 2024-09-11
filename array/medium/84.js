// Is There an Upward Trend?
// Create a function that determines if there is an upward trend.

// Examples
// function upwardTrend(arr) {
//   let result = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       result = false;
//     } else if (typeof arr[i] === "string") {
//       result = "Strings not permitted!";
//     }
//   }
//   return result;
// }
function upwardTrend(arr) {
  if (arr.some((el) => typeof el === "string")) {
    return "Strings not permitted!";
  }
  //   return arr.every((item, index) => (item > arr[index + 1] ? false : true));
  return arr.every((el, i, array) => i === 0 || el >= array[i - 1]);
}
console.log(upwardTrend([1, 2, 3, 4])); //➞ true
console.log(upwardTrend([1, 2, 6, 5, 7, 8])); //➞ false
console.log(upwardTrend([1, 2, 3, "4"])); //➞ "Strings not permitted!"
console.log(upwardTrend([1, 2, 3, 6, 7])); //➞ true
// Notes
// If there is a string element in the array, return "Strings not permitted!".
// The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).
