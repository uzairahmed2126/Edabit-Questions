// Re-Form the Word
// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

// Examples
function getWord(str1, str2) {
  return str1[0].toUpperCase() + str1.slice(1, str1.length) + str2;
}
console.log(getWord("seas", "onal")); //➞ "Seasonal"

console.log(getWord("comp", "lete")); //➞ "Complete"

console.log(getWord("lang", "uage")); //➞ "Language"
// Notes
// N/A
