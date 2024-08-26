// Spin Around, Touch The Ground
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Examples
// console.log(spinAround(["right", "right", "right", "right", "left", "right"])); //➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)

// function spinAround(directions) {
//   let spun = 0;
//   for (let i = 0; i < directions.length; i++) {
//     if (directions[i]==="right") {
//       spun += 90;
//     } else {
//       spun -= 90;
//     }
//   }
//   return Math.abs(spun/360);
// }
function spinAround(directions) {
  let totalRound = directions.reduce((sum, direction) => {
    direction === "right" ? (sum += 90) : (sum -= 90);
    return sum;
  }, 0);
  return Math.abs(totalRound / 360);
}
console.log(spinAround(["left", "right", "left", "right"])); //➞ 0

console.log(
  spinAround([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
  ])
); //➞ 2

console.log(spinAround(["left", "left", "left", "left"])); //➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".
