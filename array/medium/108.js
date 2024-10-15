// Stalactites or Stalagmites?
// Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.

// Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.

// Examples
function mineralFormation(arr) {
  let firstArr = arr[0];
  let lastArr = arr[arr.length - 1];
  let hasStalactites = firstArr.includes(1);
  let hasStalagmites = lastArr.includes(1);
  if (hasStalactites && hasStalagmites) {
    return "both";
  } else if (hasStalactites) {
    return "stalactites";
  } else if (hasStalagmites) {
    return "stalagmites";
  }
}
console.log(
  mineralFormation([
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
  ])
); //➞ "stalactites"

console.log(
  mineralFormation([
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 1],
  ])
); //➞ "stalagmites"

console.log(
  mineralFormation([
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 1],
  ])
); //➞ "both"
// Notes
// There won't be any examples where both stalactites and stalagmites meet (because those are called pillars).
// There won't be any example of neither stalactites nor stalagmites.
// In other words, if the first array has 1s, return "stalactites". If the last array has 1s, return "stalagmites". If both have them, return "both".
