// Count the Towers
// Create a function that counts the number of towers.

// Examples
// 1.count biggest tower
// 2.do it with object
function count_towers(arr) {
  let a;
  for (let i = 0; i < arr.length; i++) {
    a = arr[i]
      .reduce((acc, cur) => {
        if (!acc.includes("##")) {
          acc.push(cur);
        }
        return acc;
      }, [])
      .join("")
      .split(" ")
      .join("");
  }
  let total = a.length / 2;
  return total;
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
