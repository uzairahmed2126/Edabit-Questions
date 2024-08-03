// Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Examples
function isIsogram(str) {
  let chars = str.toLowerCase().split("").sort();
  const char = ["a", "g", "i", "m", "o", "r", "s"];
  // return chars.reduce((acc, cur) => (char.includes(cur.toLowerCase()) ? true : false), 0);
  //   str = str.toLowerCase();
  //   let letters = new Set();
  //   for (let i = 0; i < chars.length; i++) {
  //     return char.includes(chars[i].toLowerCase()) ? true : false;
  //   }
  return chars.every((char, index, arr) => {
    return arr.indexOf(char) === arr.lastIndexOf(char);
  });
}
console.log(isIsogram("Algorism")); //➞ true

console.log(isIsogram("PasSword")); //➞ false
// Not case sensitive.

console.log(isIsogram("Consecutive")); //➞ false
// Notes
// Ignore letter case (should not be case sensitive).
// All test cases contain valid one word strings.
