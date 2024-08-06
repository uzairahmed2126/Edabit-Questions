// Check for Anagrams
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// Examples
function isAnagram(str1, str2) {
  let splited1 = str1.toLowerCase().split("").sort().join("");
  let splited2 = str2.toLowerCase().split("").sort().join("");
  return splited1 === splited2;
}
console.log(isAnagram("cristian", "Cristina")); //➞ true
console.log(isAnagram("Dave Barry", "Ray Adverb")); //➞ true
console.log(isAnagram("Nope", "Note")); //➞ false
// Notes
// Should be case insensitive.
// The two given strings can be of different lengths.
