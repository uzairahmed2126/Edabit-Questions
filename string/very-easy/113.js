// Total Number of Unique Characters
// Given two strings, create a function that returns the total number of unique characters from the combined string.

// Examples
function countUnique(str1, str2) {
  let combined = str1 + str2;
  let unique = new Set(combined);
  return unique.size;
}
console.log(countUnique("apple", "play")); //➞ 5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"
console.log(countUnique("sore", "zebra")); //➞ 7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"
console.log(countUnique("a", "soup")); //➞ 5
// Notes
// Each word will contain at least one letter.
// All words will be lower cased.
