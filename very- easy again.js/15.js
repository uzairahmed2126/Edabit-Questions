// Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
function points(num1, num2) {
  let scored1 = 2;
  let scored2 = 3;
  return scored1 * num1 + scored2 * num2;
}
console.log(points(1, 1)); //➞ 5
console.log(points(7, 5)); //➞ 29
console.log(points(38, 8)); //➞ 100
// Notes
// N/A
