// Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Examples
function isIsogram(str) {
  let chars = str.split("");
  const char = ["i", "s", "o", "g", "r", "a", "m"];
  //   return chars.reduce((acc, cur) => (char.includes(cur) ? true : false), 0);
  for (let i = 0; i < chars.length; i++) {
    if (char[i] === chars[i]) {
      return true;
    }
  }
  return false;
}
console.log(isIsogram("Algorism")); //➞ true

console.log(isIsogram("PasSword")); //➞ false
// Not case sensitive.

console.log(isIsogram("Consecutive")); //➞ false
// Notes
// Ignore letter case (should not be case sensitive).
// All test cases contain valid one word strings.
