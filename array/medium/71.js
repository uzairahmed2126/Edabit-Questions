// Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".
// Examples
function flipEndChars(str) {
  if (Array.isArray(str) || str.length < 2) {
    return "Incompatible.";
  }
  let splited = str.split("");
  let firstChar = splited[0];
  let restChar = splited.slice(1, -1);
  let lastChar = splited[splited.length - 1];
  if (firstChar === lastChar) {
    return "Two's a pair.";
  }
  return `${lastChar}${restChar.join("")}${firstChar}`;
}
console.log(flipEndChars("Cat, dog, and mouse.")); //➞ ".at, dog, and mouseC"
console.log(flipEndChars("ada")); //➞ "Two's a pair."
console.log(flipEndChars("Ada")); //➞ "adA"
console.log(flipEndChars("z")); //➞ "Incompatible."
console.log(flipEndChars([1, 2, 3])); //➞ "Incompatible."
// Notes
// Tests are case sensitive (e.g. "A" and "a" are not the same character).
