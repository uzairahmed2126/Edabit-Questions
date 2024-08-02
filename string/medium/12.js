// Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
// When "x" and "o" are not in the string, return true.
// Examples
function XO(str) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      countX++;
    } else if (str[i].toLowerCase() === "o") {
      countO++;
    }
  }
  return countO === countX;
}
console.log(XO("ooxx")); //➞ true

console.log(XO("xooxx")); //➞ false

console.log(XO("ooxXm")); //➞ true
// Case insensitive.

console.log(XO("zpzpzpp")); //➞ true
// Returns true if no x and o.

console.log(XO("zzoo")); //➞ false
// Notes
// Remember to return true if there aren't any x's or o's.
// Must be case insensitive.
