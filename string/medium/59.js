// Upper or Lower Case
// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

// Examples
function stepsToConvert(str) {
  let countUpperCase = 0;
  let countLowerCase = 0;
  if (str === str.toLowerCase() || str === str.toUpperCase()) {
    return 0;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      countUpperCase++;
    } else {
      countLowerCase++;
    }
  }
  return countLowerCase > countUpperCase ? countUpperCase : countLowerCase;
}
console.log(stepsToConvert("abC")); //➞ 1
// "abC" converted to "abc" in 1 step
console.log(stepsToConvert("abCBA")); //➞ 2
// "abCBA" converted to "ABCBA" in 2 steps
console.log(stepsToConvert("aba")); //➞ 0
console.log(stepsToConvert("abaCCC")); //➞ 3
// Notes
// Return 0 if empty string.
// Return 0 if the string is already entirely in one case.
// Only alphabetic characters.
// Input has no spaces.
