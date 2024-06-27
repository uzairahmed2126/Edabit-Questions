// Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// Examples
function firstLast(str) {
  //   return str[0] + str[str.length - 1];
  return str.slice(0, 1) + str.slice(-1);
}
console.log(firstLast("uzair")); //➞ "ur"

console.log(firstLast("ahmed")); //➞ "ad"

console.log(firstLast("yunus")); //➞ "ys"

console.log(firstLast("saif")); //➞ "sf"

console.log(firstLast("durga")); //➞ "da"
// Notes
// There is no empty string.
