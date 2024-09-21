// Count the Towers
// Create a function that counts the number of towers.

// Examples
// 1.count biggest tower
// function count_towers(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i][0].length; j = j + 2) {
//       if (arr[i][0][j] !== " ") {
//         if (obj[j] === undefined) obj[j] = 1;
//         else obj[j]++;
//       }
//     }
//   }
//   let val = 0;
//   for (let key in obj) {
//     if (obj[key] > val) val = obj[key];
//   }
//   return val;
// }
// function count_towers(arr) {
//   let a;
//   for (let i = 0; i < arr.length; i++) {
//     a = arr[i]
//       .reduce((acc, cur) => {
//         if (!acc.includes("##")) {
//           acc.push(cur);
//         }
//         return acc;
//       }, [])
//       .join("")
//       .split(" ")
//       .join("");
//   }
//   let total = a.length / 2;
//   return total;
// }
function count_towers(towers) {
  let arr;
  for (let i = 0; i < towers.length; i++) {
    arr = towers[i][towers[i].length - 1];
  }
  return arr.split("  ").length;
}
console.log(
  count_towers([
    ["     ##         "],
    ["##   ##        ##"],
    ["##   ##   ##   ##"],
    ["##   ##   ##   ##"],
  ])
); //➞ 4

console.log(
  count_towers([
    ["                         ##"],
    ["##             ##   ##   ##"],
    ["##        ##   ##   ##   ##"],
    ["##   ##   ##   ##   ##   ##"],
  ])
); //➞ 6

console.log(count_towers([["##"], ["##"]])); //➞ 1
// Notes
// You are given a 2D matrix.
// Towers are two characters in length.
// Towers are made only of the character #.
// Some tests have no towers, return 0.
