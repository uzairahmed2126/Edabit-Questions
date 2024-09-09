// Lonely Integer
// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

// Examples
// function lonelyInteger(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] > 0) {
//       let idx = arr.indexOf(-arr[i]);
//       if (idx === -1) return arr[i];
//     } else {
//       let idx = arr.indexOf(Math.abs(arr[i]));
//       if (idx === -1) return arr[i];
//     }
//   }
// }
function lonelyInteger(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let element = arr[i];
    if (arr.indexOf(-element)===-1) {
      return arr[i];
    }
  }
}
console.log(lonelyInteger([1, -1, 2, -2, 3])); //➞ 3
// 3 has no matching negative appearance.
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])); //➞ -4
// -4 has no matching positive appearance.
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); //➞ -9
// Notes
// N/A
